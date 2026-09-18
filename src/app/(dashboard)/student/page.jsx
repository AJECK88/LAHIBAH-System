
import EventCalendar from "@/components/EventCalender";
import Announcement from "@/components/Announcements";
import BigCalendar from "@/components/Bigcalendar";
import Image from "next/image";
import Link  from "next/link";
import UserId from "@/components/user";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { getCurrentAcademicYearString } from "@/lib/utlity/Settings";
const StudentPage = async () => {
  const UserIdValue = await UserId();
 const studentId = UserIdValue?.toString();

if (!studentId) return [];

if (!studentId) return [];

const TimeTableData = await prisma.timetable.findMany({
  where: {
    course: {
      registrations: {
        some: {
          studentId: studentId,
          academicYear: {
            year: getCurrentAcademicYearString(),
          },
        },
      },
    },
  },
  select: {
    department: true,
    classroom: true,
    course: {
      select: {
        level: true,
        teachers: true,
      },
    },
  },
});
          const AnnouncementData = await prisma.announcement.findMany({
           
            orderBy: {
              date: 'desc', // soonest first
            },
            take: 3,
          })
          
            const currentUserInfo = studentId
              ? await prisma.student.findUnique({
                  where: {
                    id: studentId,
                  },
                  include: {
                    courseRegs:{
                     include:{
                      subject:true
                     }

                    },
                    department:true
                  },
                })
              : null;
          
            const userAvatar =
              currentUserInfo?.image && currentUserInfo.image.trim() !== ""
                ? currentUserInfo.image
                : currentUserInfo?.sex === "Male"
                ? "/maleIcon.png"
                : "/FemaleIcon.png";
          
            const DepartmentLabel = ` Departmant: ${currentUserInfo?.department.name?? "N/A"}`;
          
    return (
        /* Student Page */
        /* Right hand side */
        <div className="p-4 flex gap-4 lg:flex-row  flex-col">
            <div className="w-full lg:w-2/3 h-full md:w-auto flex flex-col gap-4">
            <div className=" flex gap-4 flex-col lg:flex-row">
                {/* User Profile Card - Row layout on mobile */}
                <div className="bg-blue-200 border border-blue-300/50 p-3.5 sm:p-5 rounded-xl flex-1 flex flex-row items-start gap-3.5 sm:gap-5 shadow-sm transition-all duration-200 hover:shadow-md">
                  <div className="relative shrink-0">
                    <Image
                      src={userAvatar}
                      alt="User Avatar"
                      width={96}
                      height={96}
                      style={{ height: "auto" }}
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover ring-2 sm:ring-4 ring-white/60 shadow-sm"
                      priority
                    />
                  </div>
              
                  <div className="w-full flex flex-col justify-between gap-2.5 min-w-0 text-left">
                    <div>
                      <h1
                        className="text-base sm:text-2xl font-bold text-slate-900 truncate"
                        title={
                          currentUserInfo
                            ? `${currentUserInfo.firstName} ${currentUserInfo.lastName}`
                            : "Student Profile"
                        }
                      >
                        {currentUserInfo
                          ? `${currentUserInfo.firstName} ${currentUserInfo.lastName}`
                          : "Student Profile"}
                      </h1>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5 truncate">
                        {DepartmentLabel}
                      </p>
                    </div>
              
                    {/* User Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs font-medium text-slate-700 pt-2 border-t border-blue-300/60">
                      {/* Blood Group */}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Image
                          src="/blood.png"
                          alt="Blood Group"
                          width={18}
                          height={18}
                          style={{ height: "auto" }}
                          className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        />
                        <span className="truncate">
                          {currentUserInfo?.matricule | "N/A"}
                        </span>
                      </div>
              
                      {/* Joined Date */}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Image
                          src="/date.png"
                          alt="Joined Date"
                          width={18}
                          height={18}
                          style={{ height: "auto" }}
                          className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        />
                        <span className="truncate">
                          {currentUserInfo?.createdAt
                            ? new Date(currentUserInfo.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  year: "numeric",
                                }
                              )
                            : "Jan 2025"}
                        </span>
                      </div>
              
                      {/* Email */}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Image
                          src="/mail2.png"
                          alt="Email"
                          width={18}
                          height={18}
                          style={{ height: "auto" }}
                          className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        />
                        <span
                          className="truncate"
                          title={currentUserInfo?.email ?? "N/A"}
                        >
                          {currentUserInfo?.email ?? "N/A"}
                        </span>
                      </div>
              
                      {/* Phone Number */}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Image
                          src="/phone.png"
                          alt="Phone Number"
                          width={18}
                          height={18}
                          style={{ height: "auto" }}
                          className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        />
                        <span className="truncate">
                          {currentUserInfo?.phoneNumber ?? "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              
                  {/* || Study more */}
                  <div className="gap-2 bg-white p-2 rounded-lg flex flex-col h-[220px]">

                        <div className="flex justify-between ">
                            <h1>Resource</h1>
                            <Link className="text-gray-500 hover:underline" href={'/resources'}>view</Link>
                        </div>
                        <div className="flex flex-row gap-2">
                      <div className="p-4 rounded-lg flex flex-col items-center justify-between gap-4">
                        <Image className="bg-[#D7FBED] rounded-2xl p-2" alt="" src={"/Books.png"} width={100} height={100} />
                        <Link href={"/resources/books"}><h3 className="text-sm font-semibold">Books</h3></Link>
                      </div>
                      <div className=" p-4 rounded-lg flex flex-col items-center justify-between">
                        <Image className="bg-[#FEF4F0] rounded-2xl p-2" alt="" src={"/Videos.png"}  width={100} height={100}/>
                        <Link href={"/resources/videos"}><h3 className="text-sm font-semibold">Videos</h3></Link>
                      </div>
                      <div className=" p-4 rounded-lg flex flex-col items-center justify-between">
                        <Image className="bg-[#E2D8FC] rounded-2xl p-2" alt="" src={"/papers.png"} width={100} height={100} />
                        <Link href={"/resources/papers"}><h3 className="text-sm font-semibold">Papers</h3></Link>
                      </div>
                    </div>
                  </div>
            </div>
            <div className=" w-full bg-white rounded-xl flex flex-col gap-4">
             <h1 className="text-sm bg-gray-100 p-4 font-semibold rounded-tl-xl rounded-tr-xl">Schedule: {"Level" +" "+TimeTableData[0]?.course?.level?.LevelName || "Level Name Not Available"}</h1>
             <div className="p-4 "><BigCalendar TimeTableData={TimeTableData}  /></div>
            </div>
            </div>
            <div className="p-4 bg-white w-full lg:w-1/3 h-full md:w-auto">
                <EventCalendar />
                <Announcement AnnouncementData={AnnouncementData}/>
            </div>
        </div>

)
}
export default StudentPage;