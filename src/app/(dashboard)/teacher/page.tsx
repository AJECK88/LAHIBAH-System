import Announcement from "@/components/Announcements";
import EventCalendar from "@/components/EventCalender";
import BigCalendar from "@/components/TeacherBigCalelndar";
import UserId from "@/components/user";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Image from "next/image";

export type TimeTableWithRelations = Prisma.TimetableGetPayload<{
  include: {
    department: true;
    course: true;
  };
}>;

const TeacherPage = async () => {
  const UserIdValue = await UserId();
  const userIdString = UserIdValue?.toString();

  const TeacherTimeTable: TimeTableWithRelations[] = userIdString
    ? (await prisma.timetable.findMany({
        where: {
          department: {
            some: {
              subjects: {
                some: {
                  teachers: {
                    some: {
                      id: userIdString,
                    },
                  },
                },
              },
            },
          },
          courseId: {
            not: null,
          },
        },
        include: {
          department: true,
          classroom: true,
          course: {
            include: {
              level: true,
            },
          },
        },
      })) || []
    : [];

  const TeacherTimeTableData = TeacherTimeTable
    .filter(
      (
        entry
      ): entry is TimeTableWithRelations & {
        course: NonNullable<TimeTableWithRelations["course"]>;
        courseId: number;
      } => entry.course !== null && entry.courseId !== null
    )
    .map((entry) => ({
      ...entry,
      id: entry.id.toString(),
      day: Number(entry.dayOfWeek),
    }));

  const AnnouncementData = await prisma.announcement.findMany({
    orderBy: {
      date: "desc",
    },
    take: 3,
  });

  const currentUserInfo = userIdString
    ? await prisma.teacher.findUnique({
        where: {
          id: userIdString,
        },
        include: {
          courses: true,
        },
      })
    : null;

  const userAvatar =
    currentUserInfo?.image && currentUserInfo.image.trim() !== ""
      ? currentUserInfo.image
      : currentUserInfo?.sex === "Male"
      ? "/maleIcon.png"
      : "/FemaleIcon.png";

  const courseCount = currentUserInfo?.courses?.length ?? 0;
  const courseLabel = `Lecturing ${courseCount} ${
    courseCount === 1 ? "course" : "courses"
  }`;

  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4 bg-white rounded-md w-full">
      {/* LEFT CONTENT AREA */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        {/* TOP CONTENT: User Info Card + Quick Stats */}
     <div className="flex flex-col lg:flex-row gap-4 w-full">
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
              : "Teacher Profile"
          }
        >
          {currentUserInfo
            ? `${currentUserInfo.firstName} ${currentUserInfo.lastName}`
            : "Teacher Profile"}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5 truncate">
          {courseLabel}
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
            {currentUserInfo?.bloodGroup ?? "N/A"}
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

  {/* Quick Stat Cards - Horizontal Row on Mobile (Scrollable) / Grid on Desktop */}
  <div className="flex flex-row overflow-x-auto pb-1 gap-3 w-full lg:w-auto lg:grid lg:grid-cols-2 lg:overflow-visible shrink-0 scrollbar-none">
    {/* Attendance */}
    <div className="bg-white border border-slate-100 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-200 min-w-[130px] flex-1 sm:flex-initial">
      <Image
        src="/singleAttendance.png"
        alt="Attendance"
        width={40}
        height={40}
        style={{ height: "auto" }}
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
      />
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-none">
          90%
        </h2>
        <span className="text-xs font-medium text-slate-500 mt-1 block whitespace-nowrap">
          Attendance
        </span>
      </div>
    </div>

    {/* Branches */}
    <div className="bg-white border border-slate-100 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-200 min-w-[130px] flex-1 sm:flex-initial">
      <Image
        src="/singleBranch.png"
        alt="Branches"
        width={40}
        height={40}
        style={{ height: "auto" }}
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
      />
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-none">
          2
        </h2>
        <span className="text-xs font-medium text-slate-500 mt-1 block whitespace-nowrap">
          Branches
        </span>
      </div>
    </div>

    {/* Lessons */}
    <div className="bg-white border border-slate-100 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-200 min-w-[130px] flex-1 sm:flex-initial">
      <Image
        src="/singleLesson.png"
        alt="Lessons"
        width={40}
        height={40}
        style={{ height: "auto" }}
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
      />
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-none">
          9
        </h2>
        <span className="text-xs font-medium text-slate-500 mt-1 block whitespace-nowrap">
          Lessons
        </span>
      </div>
    </div>

    {/* Classes */}
    <div className="bg-white border border-slate-100 p-3 sm:p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all duration-200 min-w-[130px] flex-1 sm:flex-initial">
      <Image
        src="/singleClass.png"
        alt="Classes"
        width={40}
        height={40}
        style={{ height: "auto" }}
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
      />
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-none">
          9
        </h2>
        <span className="text-xs font-medium text-slate-500 mt-1 block whitespace-nowrap">
          Classes
        </span>
      </div>
    </div>
  </div>
</div>

        {/* BOTTOM CONTENT: Big Calendar */}
        <div className="bg-white border border-gray-100 p-4 rounded-md h-[630px] shadow-sm flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-zinc-900">
            Teacher Schedule
          </h1>
          <div className="flex-1 min-h-0">
            <BigCalendar TimeTableData={TeacherTimeTableData} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR CONTENT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcement AnnouncementData={AnnouncementData} />
      </div>
    </div>
  );
};

export default TeacherPage;