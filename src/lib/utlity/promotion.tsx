import prisma from "@/lib/prisma";

export async function advanceCohortWithResits(
  currentYearId: string,
  nextYearId: string,
  fromLevelId: number,
  toLevelId: number
) {
  return await prisma.$transaction(async (tx) => {
    // 1. Fetch active students at the current level
    const students = await tx.student.findMany({
      where: { levelId: fromLevelId },
      select: { id: true },
    });

    const studentIds = students.map((s) => s.id);
    if (studentIds.length === 0) return { promotedCount: 0, resitCount: 0 };

    // 2. Advance all students to the next level in Student & Enrollment models
    await tx.enrollment.createMany({
      data: studentIds.map((id) => ({
        studentId: id,
        academicYearId: nextYearId,
        levelId: toLevelId,
        status: "PROMOTED",
      })),
    });

    await tx.student.updateMany({
      where: { id: { in: studentIds } },
      data: { levelId: toLevelId },
    });

    // 3. Register standard Level 200 subjects for all promoted students
    const newLevelSubjects = await tx.subject.findMany({
      where: { levelId: toLevelId },
      select: { id: true },
    });

    const regularRegistrations = studentIds.flatMap((studentId) =>
      newLevelSubjects.map((subject) => ({
        studentId,
        subjectId: subject.id,
        academicYearId: nextYearId,
        type: "REGULAR" as const,
        status: "PENDING" as const,
      }))
    );

    await tx.courseRegistration.createMany({
      data: regularRegistrations,
      skipDuplicates: true,
    });

    // 4. Query failed courses from previous year results
    const failedResults = await tx.result.findMany({
      where: {
        studentId: { in: studentIds },
        grade: "F",
      },
      select: { studentId: true, courseId: true },
    });

    // 5. Carry over failed courses as RESIT registrations
    if (failedResults.length > 0) {
      await tx.courseRegistration.createMany({
        data: failedResults.map((failed) => ({
          studentId: failed.studentId,
          subjectId: failed.courseId,
          academicYearId: nextYearId,
          type: "RESIT" as const,
          status: "PENDING" as const,
        })),
        skipDuplicates: true,
      });
    }

    return {
      promotedStudents: studentIds.length,
      resitRegistrationsCreated: failedResults.length,
    };
  });
}