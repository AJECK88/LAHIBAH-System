import Image from "next/image";

/* || Tempurary data */
const Announcements =[
       {
      id:1,
      Date:"2025-12-12",
      Tile:"First Semister Exam",
      discription : "Each student most be present an take part of this Exam!!"
     },
      {
      id:2,
      Tile:"Second Semister Exam",
      Date:"2026-05-06",
      discription : "Each student most be present an take part of this Exam!!"
     }, {
      id:4,
      Date:"2026-06-07",
      Tile:"Result",
      discription : "Login to you student accout and check ur result"
     }
  
];

const Announcement = () =>{

    return(
        <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
         <div className="flex flex-row justify-between items-center">
                  <h1 className="text-xl font-semibold my-1">Event</h1>
                   <h1 className="text-sm text-gray-300">View all</h1>
                        </div>
                {Announcements.map( (event) =>(
                   <div className="p-4 rounded-md bg-gray-200 odd:bg-amber-200 even:bg-purple-100"key={event.id}>
                   <div className="flex flex-row items-center justify-between">
                    <h1 className="font-semibold text-gray-600">{event.Tile}</h1> 
                    <span className="text-gray-300 text-xm">{event.Date}</span>
                    </div>
                   <p className="m-p-2 text-gray-400 text-sm">{event.discription}</p>
                   </div>
                ))}
              </div>
    )
}
export default Announcement;