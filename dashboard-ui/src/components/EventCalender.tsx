  "use client" 
import  React  from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

  type valuePiece = Date | null ;
  type value = valuePiece | [valuePiece ,valuePiece ]
 /* || Temporary */
  const Events =[
     {
      id:1,
      time:"08 : 00 AM - 01:60 PM",
      Tile:"cultural day",
      discription : "A cultural day for all student"
     },
      {
      id:2,
      Tile:"Matriculation",
      time:"09 : 00 AM - 03:00 PM",
      discription : "Maticulation the for all level 100 and graduation"
     }, {
      id:4,
      time:"12 : 00 AM - 02:60 PM",
      Tile:"Student Party",
      discription : "student meating for mortivation and growth"
     }
  ]
 const  EventCalendar = () =>{
    const [value ,onchange] =React.useState <value>(new Date());
     return( 
     <div className="bg-white p-4 rounded-md" >
      < Calendar onChange={onchange} value={value} />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-semibold my-2">Event</h1>
           <Image src={"/moreDark.png"} alt=''width={20} height={20}/> 
                </div>
        {Events.map( (event) =>(
           <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-amber-400 even:border-t-purple-500"key={event.id}>
           <div className="flex flex-row items-center justify-between">
            <h1 className="font-semibold text-gray-600">{event.Tile}</h1> 
            <span className="text-gray-300 text-xm">{event.time}</span>
            </div>
           <p className="m-p-2 text-gray-400 text-sm">{event.discription}</p>
           </div>
        ))}
      </div>
      </div>
     )
 }
 export default EventCalendar;