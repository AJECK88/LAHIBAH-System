
import EventCalendar from "@/components/EventCalender";
import Announcement from "@/components/Announcements";
import BigCalendar from "@/components/Bigcalendar";
import Image from "next/image";
import Link  from "next/link";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
const StudentPage = async () => {
    const user = await currentUser()
          const userName = user?.fullName;
          const AnnouncementData = await prisma.announcement.findMany({
           
            orderBy: {
              date: 'desc', // soonest first
            },
            take: 3,
          })
          
          
    return (
        /* Student Page */
        /* Right hand side */
        <div className="p-4 flex gap-4 lg:flex-row  flex-col">
            <div className="w-full lg:w-2/3 h-full md:w-auto flex flex-col gap-4">
            <div className=" flex gap-4 flex-col lg:flex-row">
                <div className="flex p-6  w-full lg:w-2/3 bg-white rounded-xl mb-2 items-center h-[220px]">
                    <div className=" flex flex-col justify-between">
                    <h1 className="text-2xl font-bold mb-2">Welcome back, {userName}!</h1>
                    <p className="text-gray-600 hidden text-sm lg:block"> We're here to support you 
                        learning journey. Dive into your classes and keep progressing 
                        towards your goals.</p>
                    </div>
                    <Image src="/image/Human.png" alt="Class Image" width={200} height={200} />
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
            <div className="lg:w-1/3 w-full bg-white rounded-xl flex flex-col gap-4 h-[600px]">
             <h1 className="text-sm bg-gray-100 p-4 font-semibold rounded-tl-xl rounded-tr-xl">Schedule: {"level 100"}</h1>
             <div className="p-4 "><BigCalendar  /></div>
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