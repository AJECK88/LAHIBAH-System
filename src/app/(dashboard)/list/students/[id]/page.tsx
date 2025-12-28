
import Announcement from "@/components/Announcements";
import BigCalendar from "@/components/Bigcalendar";
import PerformanceChart from "@/components/TeeachersPerformance";
import Link from "next/dist/client/link";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { headers } from 'next/headers'
import Image from "next/image"
import prisma from "@/lib/prisma";

const SingleStuentPage = async(
    {params}:{params:{id:string}}
) => {
      console.log(params.id)
 const StudentArray = await prisma.student.findMany({
    where:{
        id :params.id
    },
    select:{
        address:true,
        age:true,
        attendance:true,
        DateOfBirth:true,
        email:true,
        firstName:true,
        image:true,
        lastName:true,
        matricule:true,
        fees:true,
        phoneNumber:true,
        department:true,
        sex:true,
        

    }
    
  })
  const Student =StudentArray[0]
 if (!Student.DateOfBirth) {
  return <p>Date of birth not available</p>
}

const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
}).format(new Date(Student.DateOfBirth))

 const AnnouncementData = await prisma.announcement.findMany({
 
  orderBy: {
    date: 'desc', // soonest first
  },
  take: 3,
})

    return (

        <div className="lg:flex  gap-4 m-2 lg:flex-row md:flex-col sm:flex-col" >
             {/* Teacher details go here */}
                {/* || left side */}
            <div className="xl:w-2/3 w-full">
                {/* TOP CONTENT */}
                <div className="flex flex-col lg:flex-row gap-4" >
                      {/* || users  infor card */}
                 <div className="bg-blue-200 py-6 px-4 rounded-md flex-1 flex gap-4 " >
                    <div className="w-1/3" >
                    
                    {Student.image ==null
                        ?
                        Student.sex =="Female"
                        ?
                        <Image src=  "/FemaleIcon.png"
                    alt="User Avatar"
                     width={144} 
                     height={144} 
                     className=" w-36 h-36  object-cover rounded-full " />
                     : 
                     <Image src=  "/maleIcon.png"
                    alt="User Avatar"
                     width={144} 
                     height={144} 
                     className=" w-36 h-36  object-cover rounded-full " />
                     : <Image src=  "/maleIcon.png"
                    alt="User Avatar"
                     width={144} 
                     height={144} 
                     className=" w-36 h-36  object-cover rounded-full " />
                    }
                    
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4 ">
                    <h1 className="text-xl  font-semibold">{Student.firstName +" " + Student.lastName}</h1>
                    <p className="text-sm text-gray-500">{"Depertment of" + " " + Student.department.name}</p>
                    <div className=" flex items-center  gap-3 flex-wrap text-xs font-medium border-2 border-amber-100 p-2">
                       {/*  <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                            <Image
                                src="/blood.png"
                                alt="User Avatar"
                                width={8}
                                height={8}
                                className=" w-8 h-8 "
                            />
                            <span className="ml-1">{Student.}</span>
                        </div> */}
                           <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                            <Image
                                src="/date.png"
                                alt="User Avatar"
                                width={1}
                                height={1}
                                className=" w-8 h-8 "
                            />
                            <span className="ml-1">{formattedDate}</span>
                        </div>
                           <Link  href={`mailto:${Student.email}`} className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                            <Image
                                src="/mail2.png"
                                alt=""
                                width={14}
                                height={14}
                                className=" w-8 h-8 "
                            />
                            <span className="ml-1 font-semibold text-black">{Student.email}</span>
                        </Link>
                           <div className="w-full md:w-1/3 flex items-center lg:w-full 2xl:w-1/3 gap-2">
                            <Image
                                src="/phone.png"
                                alt="User Avatar"
                                width={10}
                                height={14}
                                className=" w-8 h-8"
                            />
                            <span className="ml-1">{Student.phoneNumber}</span>
                        </div>
                        </div>
                    </div>
                 </div>
                    {/* || small card*/}
                 <div className=" flex-1 flex gap-4 justify-center flex-wrap " >  {/* || card */}
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                    <Image src={"/singleAttendance.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 "
                    /> <div className="">
                        <h1 className="text-xl font-semibold">90%</h1>
                        <span className="text-xs text-gray-500">Attendance</span>
                    </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                    <Image src={"/singleBranch.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 " 
                    /> <div className="">
                        <h1 className="text-xl font-semibold">2</h1>
                        <span className="text-xs text-gray-500">Branches</span>
                    </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                    <Image src={"/singleLesson.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 "
                    /> <div className="">
                        <h1 className="text-xl font-semibold">9</h1>
                        <span className="text-xs text-gray-500">Lessons</span>
                    </div>
                    </div> 
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[45%] xl:w-[48%]">
                    <Image src={"/singleClass.png"} alt="Attendance" width={100} height={100} className=" w-15 h-15 "
                    /> <div className="">
                        <h1 className="text-xl font-semibold">9</h1>
                        <span className="text-xs text-gray-500">Classes</span>
                    </div>
                    </div>

                 </div>
                </div>
               {/* BOTTOM CONTENT */}
                <div className="bg-white p-4 mt-4 rounded-md h-[630px]">
                    <h1>Student&apos;s Schedule</h1>
                    <BigCalendar />
                    </div> 
                </div>
                    {/* || right side */}
                <div className="xl:w-1/3 w-full flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md ">
                    <h1 className="text-lg font-semibold">Shortcuts</h1>
                   <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-500">
                      <Link href={`/list/teachers?departmentId=${1}`}>
                          <div className="bg-gray-100 p-2 rounded-md">Student&apos;s Teachers</div>
                      </Link>
                      <Link href="/dashboard/subjects">
                          <div className="bg-gray-100 p-2 rounded-md">Student&apos;s exams</div>
                      </Link>
                       <Link href="/dashboard/subjects">
                          <div className="bg-gray-100 p-2 rounded-md">Student&apos;s Assignments</div>
                      </Link>

                   </div>

                </div >
                  <PerformanceChart />
                <Announcement AnnouncementData={AnnouncementData} />
              
                </div>

            </div>
    );
};

export default SingleStuentPage;