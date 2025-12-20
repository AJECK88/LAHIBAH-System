"use client";
import Link from "next/link";


type AnnouncementItem = {
  id: string
  title: string
  message: string
  date: Date
  departmentId: string | null
}
const Announcement = ({AnnouncementData}:{AnnouncementData:AnnouncementItem[]}) =>{


    return(
        <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
         <div className="flex flex-row justify-between items-center">
                  <h1 className="text-xl font-semibold my-1">Announcements</h1>
                  <Link href={'list/announcements'}> <h1 className="text-sm text-gray-400  hover:text-gray-500 underline">View all</h1></Link>
                        </div>
                {AnnouncementData.map( (event) =>(
                    
                   <div className="p-4 rounded-md bg-gray-200 odd:bg-amber-200 even:bg-purple-100"key={event.id}>
                   <div className="flex p-2 flex-row items-center justify-between">
                    <h1 className="font-semibold text-gray-600">{event.title}</h1> 
                    <span className="text-gray-300 text-xm">{event.date.toLocaleDateString()}</span>
                    </div>
                   <p className="m-p-2 text-gray-400 text-sm">{event.message}</p>
                   </div>
                ))}
              </div>
    )
}
export default Announcement;