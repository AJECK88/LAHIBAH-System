
import prisma from "@/lib/prisma";
import AttendanceForm from "@/components/Forms/Attendanceform";
import AttendanceTable from "@/components/AttendanceTable";
import AttendanceNav from "@/components/AttendanceNav";
import { c } from "node_modules/@upstash/redis/error-8y4qG0W2.mjs";
import { Prisma } from "@prisma/client";


interface PageProps{
  searchParams: Promise<{
    departmentId?: string;
    courseId?: string;
    semester?: string;
    roomId?: string;
}>};


export default async function MarkAttendancePage({ searchParams }: PageProps) {
  // DB Quoring
  const department = await prisma.department.findMany({ select: { id: true, name: true } });
  const courses = await prisma.subject.findMany({ select: { id: true, name: true } });
  const classRoom = await prisma.classroom.findMany({ select: { id: true, name: true } });
  const TimeTable = await prisma.timetable.findMany({select:{id:true,endTime:true,startTime:true ,course:{select:{id:true}}}})
    const params = await searchParams;
   // 1. Find the matching department object
  const selectedDepartment = department.find(
    (dept) => String(dept.id) === String(params?.departmentId)
  );
  const departmentName = selectedDepartment?.name || "All";
  const departmentId = selectedDepartment?.id || "All";
 //2 find  the matching department abject
 const selectedCourses = courses.find((cours)=>String(cours.id) === String(params?.courseId ))
 const courseName =selectedCourses?.name||"All"
 //3 Find the matching room object 
 const SelectedRoom = classRoom.find((Room)=>String(Room.id)==String(params?.roomId))
 const RoomName = SelectedRoom?.name||"All"
 //find the matching timetable
 const TimeFram = TimeTable.find((Course)=> Number(Course.course?.id)===Number(params?.courseId));
 console.log("times"+TimeFram , params.courseId)
 const courseTime = TimeFram ? `${TimeFram.startTime} - ${TimeFram.endTime}` : "All";

  return (
    <div className="p-4 lg:p-6 min-h-screen space-y-6">
      {/* Top Navigation */}
      <AttendanceNav key={ departmentId|| "all"} departmentName={departmentName} />

      <div className="flex gap-2">
        <div className="w-1/4">
          {/* Main Grid: Filters Sidebar + Attendance Content */}
          <AttendanceForm courses={courses} departments={department} room={classRoom} />
        </div>

        <div className="w-3/4">
          {/* Right Column: Attendance Marking Area */}
          <AttendanceTable course={courseName} room={RoomName} Coursetime={courseTime} />
        </div>
      </div>
    </div>
  );
}