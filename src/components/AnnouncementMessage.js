'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FormsContainer from "./FormsContainer";
export default  function  AnnouncementsPage(
    {AnnouncementData}
) {
 const [messages, setMessages] = useState( [...AnnouncementData]);
  const scrollRef = useRef(null);
  // Auto-scroll when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Receiveds:", data);

      if (data.type === "announcement") {
    const a = data.message; // the REAL announcement object

    setMessages(prev => [
          ...prev,
          {
            id: a.id,
            title: a.title,
            message: a.message,
            date: a.date,
            time: a.time,
      }
    ]);

      
    };
  }
    return () => ws.close();
  }, []);

  const DeleteAnnouncemsnt = (formData) => {
    formData.preventDefault();
  }
  return (
   (<div ref={scrollRef} className="bg-white h-full overflow-scroll pb-30 pl-3 pr-3 pt-3" >
      {messages.map((msg, i) => {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
}).format(new Date(msg.date));
        const formattedTime = new Date(msg.date).toLocaleTimeString();

        return (
        <div key={i} className="border bg-white border-gray-200 mb-4 pb-4 md:flex flex-row  gap-4 items-center  justify-between p-2 rounded-sm shadow-md relative">
          <div className="pl-2 flex md:flex-col justify-between"> <div className="text-sm text-black  mb-2">{formattedDate}</div>
          <div className="text-sm text-gray-500 mb-2">{formattedTime}</div>
          </div>
          <div className="w-full md:w-2/3">
          <h3 className="font-semibold text-xl text-gray-700">{msg.title}</h3>
          <p className="text-gray-700">{msg.message}</p>
</div> 
<div className="flex justify-between items-center md:items-center md:w-fit w-full  mt-4">
<button className="border-blue-400  text-blue-400 border-2 p-1 h-fit rounded-md hover:bg-white">details</button>
   <div className="relative group inline-block">
  {/* Image (acts as the hover trigger) */}
  <Image
    className="cursor-pointer"
    src="/veticalDoits.svg"
    alt="arrow-right"
    width={30}
    height={50}
  />

  {/* Hidden menu (shows on image hover) */}
  <div  
    className="
      absolute top-2 right-2 bg-black text-white rounded-md 
      w-35 hidden flex-col z-10 items-start p-3 opacity-80
       group-hover:hidden
    "
  >
    <button className="text-white hover:bg-blue-400 w-full flex items-center justify-between pl-3 pr-3 rounded-sm"> <Image src={"/Delete.png"} alt="." height={20} width={20}/> <span className="pl-2">delete</span></button>
    <button className="text-white hover:bg-blue-400 w-full flex items-start pl-3  justify-between rounded-sm"><Image src={"/edit.svg"} alt="." height={20} width={20}/> <span className="pl-2 pr-7">Edit</span></button>
    <button className="text-white hover:bg-blue-400 w-full flex items-start pl-3 justify-between rounded-sm mb-2"><Image src={"/share.svg"} alt="." height={20} width={20}/> <span className="pl-2 pr-4">Share</span></button>
    <button className="text-white hover:bg-blue-400 w-full flex items-start pl-3 rounded-sm border-t border-t-amber-100 ">more</button>
  </div>
</div>
</div>
        </div>
        );
      })}
    </div>)
  )
} 

