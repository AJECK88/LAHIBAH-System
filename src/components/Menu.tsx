
import Link from "next/link";
import Image from "next/image" 
import { currentUser } from "@clerk/nextjs/server";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Courses",
        href: "/list/courses",
        visible: ["admin" ,"student"],
      },
      {
        icon: "/class.png",
        label: "Departments",
        href: "/list/Departments",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
 export  const   Menu =async () => {
  const user = await currentUser(); 
   const role =  user?.publicMetadata.role as string ;
  return (
    <div className="mt-4 text-sm w-full">
       {menuItems.map( (e)=>(

         <div className=" flex flex-col" key={e.title}>
          <span className="hidden lg:block text-gray-400 font-light my-2">{e.title}</span>
          {e.items.map(item => {
             if(item.visible.includes(role)) {

          return (
             <Link href={item.href} key={item.label} 
             className="flex gap-2 focus:bg-gray-200 pl-3 items-center w-full lg:justify-start text-gray-500 py-2 lg:py-3">
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className=" lg:block">{item.label}</span>
             </Link>
          )
          }
        
        })}

         </div>
       ))}
    </div>
  );
}