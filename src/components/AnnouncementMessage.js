"use client";
import { title } from "process";
import Image from "next/image";
import { useEffect, useState } from "react";
import { date } from "zod";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
export default  function  AnnouncementsPage(
    {AnnouncementData}
) {
const [messages, setMessages] = useState( [...AnnouncementData]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received:", data);

      if (data.type === "announcement") {
        setMessages((prev) => [...prev, data.message]);
      }
    };
 
    return () => ws.close();
  }, []);

  return (
   (<div className="bg-white h-full overflow-scroll" >
      {messages.map((msg, i) => {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
}).format(new Date(msg.date));
        const formattedTime = new Date(msg.date).toLocaleTimeString();

        return (
        <div key={i} className="border-b bg-white border-gray-300 mb-4 pb-4 flex flex-row gap-4 items-center  justify-between p-2 rounded-sm shadow-sm">
          <div className="pl-2"> <div className="text-sm text-black  mb-2">{formattedDate}</div>
          <div className="text-sm text-gray-500 mb-2">{formattedTime}</div>
          </div>
          <div className="w-2/3">
          <h3 className="font-semibold text-xl text-gray-700">{msg.title}</h3>
          <p className="text-gray-700">{msg.message}</p>
</div> 
<div className="flex">
<button className="border-blue-400  text-blue-400 border-2 p-1 h-fit rounded-md hover:bg-white">details</button>
<Image src="/veticalDoits.svg" alt="arrow-right" width={30} height={50} />
</div>
        </div>
        );
      })}
    </div>)
  )
} 

