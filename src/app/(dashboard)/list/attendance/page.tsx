import prisma from "@/lib/prisma";
import AttendanceForm from "@/components/Forms/Attendanceform";
import AttendanceTable from "@/components/AttendanceTable";
import AttendanceNav from "@/components/AttendanceNav";
import { s } from "@upstash/redis";
import { string } from "zod";

interface PageProps {
  searchParams: Promise<{
    departmentId?: string;
    courseId?: string;
    semester?: string;
    roomId?: string;
  }>;
}

export default async function MarkAttendancePage({ searchParams }: PageProps) {
  const params = await searchParams;

  // 1. Fetch Departments and Classrooms
  const department = await prisma.department.findMany({
    select: { id: true, name: true },
  });

  const classRoom = await prisma.classroom.findMany({
    select: { id: true, name: true },
  });

  // 2. Fetch Courses (Filtered by department if provided, otherwise fetch all)
  const courses = await prisma.subject.findMany({
    where: params.departmentId
      ? {
          department: {
            some: {
              id: params.departmentId,
            },
          },
        }
      : {}, // Omit filter when no departmentId is selected
    select: {
      id: true,
      name: true,
    },
  });

  // 3. Directly fetch Enrolled Students for the selected course
  const students = params.courseId
    ? await prisma.student.findMany({
        where: {
          courseRegs: {
            some: {
              id: String(params.courseId),
            },
          },
        },
        select: {
          id: true,
          lastName: true,
          firstName: true,
          matricule: true,
        },
      })
    : [];

  const attendanceStudents = students.map((student) => ({
    ...student,
    matricule: student.matricule || "",
    totalAttdHours: 0,
    status: "Enrolled" as const,
  }));

  // 4. Fetch Timetable for the selected course
  const TimeTable = params.courseId
    ? await prisma.timetable.findFirst({
        where: {
          courseId: Number(params.courseId),
        },
        select: {
          id: true,
          startTime: true,
          endTime: true,
        },
      })
    : null;

  // 5. Safe Selected Entity Name Resolution
  const selectedDepartment = department.find(
    (dept) => String(dept.id) === String(params?.departmentId)
  );
  const departmentName = selectedDepartment?.name || "All";
  const departmentId = selectedDepartment?.id || "All";

  const selectedCourse = courses.find(
    (cours) => String(cours.id) === String(params?.courseId)
  );
  const courseName = selectedCourse?.name || "All";
  const courseId = params.courseId ?? "";

  const selectedRoom = classRoom.find(
    (room) => String(room.id) === String(params?.roomId)
  );
  const RoomName = selectedRoom?.name || "All";

  const courseTime = TimeTable
    ? `${TimeTable.startTime} - ${TimeTable.endTime}`
    : "All";

  // Safe key generator to prevent index [0] undefined crashes
  const formKey = `${classRoom[0]?.id ?? "no-room"}-${department[0]?.id ?? "no-dept"}`;

  return (
    <div className="p-4 lg:p-6 min-h-screen space-y-6">
      {/* Top Navigation */}
      <AttendanceNav key={departmentId} departmentName={departmentName} />

      {/* Main Layout: Stacked on Mobile, Side-by-Side on Desktop */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Filters / Form */}
        <div className="w-full md:w-1/4">
          <AttendanceForm
            key={formKey}
            courses={courses}
            departments={department}
            room={classRoom}
          />
        </div>

        {/* Right Column: Attendance Marking Area */}
        <div className="w-full md:w-3/4">
          <AttendanceTable
            course={courseName}
            room={RoomName}
            courseId={courseId}
            Coursetime={courseTime}
            MOCK_STUDENTS={attendanceStudents}
          />
        </div>
      </div>
    </div>
  );
}