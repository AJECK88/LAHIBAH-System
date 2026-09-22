import prisma from "@/lib/prisma";
import AttendanceForm from "@/components/Forms/Attendanceform";
import AttendanceTable from "@/components/AttendanceTable";
import AttendanceNav from "@/components/AttendanceNav";
import { getCurrentAcademicYearString } from "@/lib/utlity/Settings";
import UserId, { role } from "@/components/user";
import AttendanceMatrixModal from "@/components/AttendanceMetrixModle";


interface PageProps {
  searchParams: Promise<{
    departmentId?: string;
    courseId?: string;
    semester?: string;
    roomId?: string;
    date?: string;
  }>;
}

export default async function MarkAttendancePage({ searchParams }: PageProps) {
  const params = await searchParams;

  const userRole = await role();
  const userId = await UserId();
  const academicYearStr = getCurrentAcademicYearString();

  // 1. Fetch metadata concurrently
  const [activeYear, departments, classRooms] = await Promise.all([
    prisma.academicYear.findUnique({
      where: { year: academicYearStr },
      select: { id: true, year: true },
    }),
    userRole === "admin"
      ? prisma.department.findMany({ select: { id: true, name: true } })
      : userRole === "teacher"
      ? prisma.department.findMany({
          where: {
            subjects: {
              some: {
                teachers: {
                  some: { id: String(userId) },
                },
              },
            },
          },
          select: { id: true, name: true },
        })
      : [],
    prisma.classroom.findMany({ select: { id: true, name: true } }),
  ]);

  const activeDeptId = params.departmentId || departments[0]?.id || "";

  const courses = await prisma.subject.findMany({
    where: activeDeptId ? { department: { some: { id: activeDeptId } } } : {},
    select: { id: true, name: true },
  });

  const activeCourseId = params.courseId || String(courses[0]?.id || "");
  const activeRoomId = params.roomId || classRooms[0]?.id || "";

  // 2. Fetch Registrations, Attendance, and Timetable
  const [registrations, attendanceRecords, timetable] = await Promise.all([
    activeCourseId && activeYear
      ? prisma.courseRegistration.findMany({
          where: {
            subjectId: Number(activeCourseId),
            academicYearId: activeYear.id,
          },
          include: {
            student: {
              select: {
                id: true,
                lastName: true,
                firstName: true,
                matricule: true,
              },
            },
          },
          orderBy: { student: { firstName: "asc" } },
        })
      : [],
    activeCourseId && activeYear
      ? prisma.attendance.findMany({
          where: {
            courseId: Number(activeCourseId),
            academicYearId: activeYear.id,
          },
        })
      : [],
    activeCourseId
      ? prisma.timetable.findFirst({
          where: { courseId: Number(activeCourseId) },
          select: { id: true, startTime: true, endTime: true },
        })
      : null,
  ]);

  const attendanceStudents = registrations.map((reg) => ({
    id: reg.student.id,
    firstName: reg.student.firstName,
    lastName: reg.student.lastName,
    matricule: reg.student.matricule || "N/A",
    totalAttdHours: 0,
    status: "Enrolled" as const,
  }));

  const attendanceRecordsProcessed = attendanceRecords.map((r) => ({
    ...r,
    date: r.date instanceof Date ? r.date.toISOString().split("T")[0] : String(r.date),
    status: (r.status || (r.present ? "PRESENT" : "ABSENT")) as "PRESENT" | "ABSENT" | "LATE",
  }));

  const selectedDepartment = departments.find((d) => d.id === activeDeptId);
  const selectedCourse = courses.find((c) => String(c.id) === activeCourseId);
  const selectedRoom = classRooms.find((r) => r.id === activeRoomId);

  const departmentName = selectedDepartment?.name || "All";
  const courseName = selectedCourse?.name || "All";
  const roomName = selectedRoom?.name || "All";
  const courseTime = timetable
    ? `${timetable.startTime} - ${timetable.endTime}`
    : "Not Scheduled";

  const activeFilters = {
    departmentId: activeDeptId,
    courseId: activeCourseId,
    roomId: activeRoomId,
    semester: params.semester || "SEMESTER_1",
    date: params.date || new Date().toISOString().split("T")[0],
  };

  return (
    <div className="p-4 lg:p-6 min-h-screen space-y-6">
      {/* Top Header with Action Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <AttendanceNav key={activeDeptId} departmentName={departmentName} />

        {/* Matrix Only Opens on Button Click */}
        <AttendanceMatrixModal
          courseCode={activeCourseId}
          dates={[...new Set(attendanceRecordsProcessed.map((r) => r.date.split("T")[0]))]}
          records={attendanceRecordsProcessed}
          students={registrations.map((reg) => ({
            ...reg.student,
            matricule: reg.student.matricule || "N/A",
            name: `${reg.student.firstName} ${reg.student.lastName}`,
          }))}
          courseName={courseName}
          Barch={activeYear?.year || null}
        />
      </div>

      {/* Main Form & Marking Table */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <AttendanceForm
            courses={courses}
            departments={departments}
            room={classRooms}
            activeFilters={activeFilters}
          />
        </div>

        <div className="w-full md:w-3/4">
          <AttendanceTable
            course={courseName}
            room={roomName}
            courseId={activeCourseId}
            Coursetime={courseTime}
            MOCK_STUDENTS={attendanceStudents}
          />
        </div>
      </div>
    </div>
  );
}