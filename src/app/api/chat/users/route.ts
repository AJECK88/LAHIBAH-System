import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const students = await prisma.student.findMany({
      where: { id: { not: user.id } },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        department: { select: { name: true } },
        level: { select: { LevelName: true } },
      },
    });

    const teachers = await prisma.teacher.findMany({
      where: { id: { not: user.id } },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        courses: { select: { name: true }, take: 1 },
      },
    });

    const admins = await prisma.admin.findMany({
      where: { id: { not: user.id } },
      select: {
        id: true,
        userName: true,
      },
    });

    const shapedStudents = students.map((s) => ({
      id: s.id,
      name: `${s.firstName} ${s.lastName}`,
      details: `${s.department?.name || "No department"} - ${s.level?.LevelName || ""}`,
      type: "STUDENT",
    }));

    const shapedTeachers = teachers.map((t) => ({
      id: t.id,
      name: `${t.firstName} ${t.lastName}`,
      details: t.courses[0]?.name || "Teacher",
      type: "TEACHER",
    }));

    const shapedAdmins = admins.map((a) => ({
      id: a.id,
      name: a.userName,
      details: "Administrator",
      type: "ADMIN",
    }));

    return new Response(
      JSON.stringify({
        students: shapedStudents,
        teachers: shapedTeachers,
        people: shapedAdmins,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("GET /api/chat/users error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), { status: 500 });
  }
}
