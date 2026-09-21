import prisma from "@/lib/prisma";
import AttendanceForm from "@/components/Forms/Attendanceform";
import AttendanceTable from "@/components/AttendanceTable";
import AttendanceNav from "@/components/AttendanceNav";
import { getCurrentAcademicYearString } from "@/lib/utlity/Settings";
import UserId, { role } from "@/components/user";
import VeiwAttendanceMatrix from "@/components/VeiwAttendance";

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

  // 1. Get Active Academic Year
  const academicYearStr = getCurrentAcademicYearString();
  const activeYear = await prisma.academicYear.findUnique({
    where: { year: academicYearStr },
    select: { id: true },
  });

  // 2. Fetch Base Filter Metadata
  const userRole = await role();
  const userId = await UserId()
const departments =(userRole === "admin")
  ? await prisma.department.findMany({
      select: { id: true, name: true },
    })
  : (userRole === "teacher")? await prisma.department.findMany({
      where: {
        subjects: {
          some: {
            teachers: {
              some: {
                id: String(userId),
              },
            },
          },
        },
      },
      select: { id: true, name: true },
    }):[];
  const classRooms = await prisma.classroom.findMany({
    select: { id: true, name: true },
  });

  // 3. Resolve Fallback Selections (Server-Side Defaults)
  const activeDeptId = params.departmentId || departments[0]?.id || "";

  // 4. Fetch Courses filtered by selected department
  const courses = await prisma.subject.findMany({
    where: activeDeptId
      ? {
          department: {
            some: { id: activeDeptId },
          },
        }
      : {},
    select: { id: true, name: true },
  });

  const activeCourseId = params.courseId || String(courses[0]?.id || "");
  const activeRoomId = params.roomId || classRooms[0]?.id || "";

  // 5. Fetch Enrolled Students for active course & ACTIVE academic year only
  const students = activeCourseId && activeYear
    ? await prisma.student.findMany({
        where: {
          courseRegs: {
            some: {
              subjectId: Number(activeCourseId),
              academicYearId: activeYear.id, // Isolates active enrollments
            },
          },
        },
        select: {
          id: true,
          lastName: true,
          firstName: true,
          matricule: true,
        },
        orderBy: { lastName: "asc" },
      })
    : [];

  const attendanceStudents = students.map((student) => ({
    ...student,
    matricule: student.matricule || "N/A",
    totalAttdHours: 0,
    status: "Enrolled" as const,
  }));

  // 6. Fetch Timetable Slot for selected course
  const timetable = activeCourseId
    ? await prisma.timetable.findFirst({
        where: { courseId: Number(activeCourseId) },
        select: { id: true, startTime: true, endTime: true },
      })
    : null;

  // 7. Resolve Display Labels
  const selectedDepartment = departments.find((d) => d.id === activeDeptId);
  const selectedCourse = courses.find((c) => String(c.id) === activeCourseId);
  const selectedRoom = classRooms.find((r) => r.id === activeRoomId);

  const departmentName = selectedDepartment?.name || "All";
  const courseName = selectedCourse?.name || "All";
  const roomName = selectedRoom?.name || "All";
  const courseTime = timetable
    ? `${timetable.startTime} - ${timetable.endTime}`
    : "Not Scheduled";

  // Pass active filters to form for controlled rendering
  const activeFilters = {
    departmentId: activeDeptId,
    courseId: activeCourseId,
    roomId: activeRoomId,
    semester: params.semester || "SEMESTER_1",
    date: params.date || new Date().toISOString().split("T")[0],
  };

  // 1. Fetch all students registered for this subject
  const registrations =
    activeCourseId && activeYear
      ? await prisma.courseRegistration.findMany({
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
      : [];

  // 2. Fetch all attendance logs for this subject
const attendanceRecords=
  activeCourseId && activeYear
    ? await prisma.attendance.findMany({
        where: {
          courseId: Number(activeCourseId),
          student: {
            courseRegs: {
              some: {
                academicYearId: activeYear.id,
              },
            },
          },
        },
      })
    : [];


const firstAttendanceYearId = attendanceRecords[0]?.academicYearId;
const Barch = firstAttendanceYearId 
  ? await prisma.academicYear.findUnique({ where: { id: firstAttendanceYearId } })
  : null;
  // Convert Date objects to strings and normalize enum values to the AttendanceRecord union.
const attendanceRecordsProcessed = attendanceRecords.map((r) => ({
  ...r,
  date: r.date instanceof Date ? r.date.toISOString().split("T")[0] : String(r.date),
  status: (r.status || (r.present ? "PRESENT" : "ABSENT")) as "PRESENT" | "ABSENT" | "LATE",
}));
 
console.log(attendanceRecords)
  return (
    <div className="p-4 lg:p-6 min-h-screen space-y-6">
      <VeiwAttendanceMatrix
        courseCode={activeCourseId}
        dates={[...new Set(attendanceRecordsProcessed.map((r) => r.date.split("T")[0]))]}
        records={attendanceRecordsProcessed}
        students={registrations.map((reg) => ({
          ...reg.student,
          matricule: reg.student.matricule || "N/A",
          name: `${reg.student.firstName} ${reg.student.lastName}`,
        }))}
        courseName={courseName}
        Barch={Barch?.year || null}
      />
      {/* Top Navigation */}
      <AttendanceNav key={activeDeptId} departmentName={departmentName} />

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Filter Sidebar */}
        <div className="w-full md:w-1/4">
          <AttendanceForm
            courses={courses}
            departments={departments}
            room={classRooms}
            activeFilters={activeFilters}
          />
        </div>

        {/* Right Column: Attendance Marking Area */}
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