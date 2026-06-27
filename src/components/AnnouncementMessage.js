'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AnnouncementsPage({ AnnouncementData }) {
  // Gracefully fallback to an empty array if AnnouncementData is undefined
  const [messages, setMessages] = useState([...(AnnouncementData || [])]);
  const scrollRef = useRef(null);

  // Auto-scroll when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const protocol = window.location.protocol;
    const eventSource = new EventSource(`${protocol}//${window.location.host}/api/ws`);

    eventSource.onopen = () => {
      console.log("Connected to Real-Time SSE Announcement Stream!");
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Announcement stream snapshot incoming:", data);
        
        setMessages((prev) => [
          ...prev,
          {
            id: data.id,
            title: data.title,
            message: data.message,

            date: data.createdAt || data.date || new Date().toISOString(), 
          },
        ]);
      } catch (err) {
        console.error("Error reading data chunk:", err);
      }
    };

    eventSource.onerror = (error) => {
      console.error("Stream connection dropped or timed out:", error);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div ref={scrollRef} className="bg-white h-full overflow-y-auto pb-30 p-3" >
      {messages.map((msg, i) => {
        // Safe Date Parsing Guard
        const messageDate = msg.date ? new Date(msg.date) : new Date();
        const isValidDate = !isNaN(messageDate.getTime());

        const formattedDate = isValidDate 
          ? new Intl.DateTimeFormat("en-US", { month: "long", day: "2-digit", year: "numeric" }).format(messageDate)
          : "Recent";

        const formattedTime = isValidDate 
          ? messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
          : "";

        return (
          <div key={msg.id || i} className="border bg-white border-gray-200 mb-4 pb-4 md:flex flex-row gap-4 items-center justify-between p-2 rounded-sm shadow-md relative">
            
            {/* Timestamp Column */}
            <div className="pl-2 flex md:flex-col justify-between min-w-[120px]"> 
              <div className="text-sm text-black font-medium mb-1">{formattedDate}</div>
              <div className="text-sm text-gray-400">{formattedTime}</div>
            </div>

            {/* Content Body */}
            <div className="w-full md:w-2/3">
              <h3 className="font-semibold text-xl text-gray-700">{msg.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{msg.message}</p>
            </div> 

            {/* Action Items Panel */}
            <div className="flex justify-between items-center md:items-center md:w-fit w-full mt-4 md:mt-0">
              <button className="border-blue-400 text-blue-400 border-2 px-3 py-1 text-sm rounded-md hover:bg-blue-50 transition">
                details
              </button>

              {/* Action Menu (Hover Container) */}
              <div className="relative group inline-block ml-4">
                <Image
                  className="cursor-pointer p-1 hover:bg-gray-100 rounded-full transition"
                  src="/veticalDoits.svg"
                  alt="Options Menu"
                  width={30}
                  height={50}
                />

                {/* Dropdown Options List */}
                <div className="absolute right-0 bottom-full md:top-8 md:bottom-auto bg-gray-900 text-white rounded-md w-36 hidden group-hover:flex flex-col z-10 p-2 shadow-xl opacity-95 transition">
                  <button className="text-white hover:bg-blue-500 w-full flex items-center justify-between px-2 py-1.5 text-xs rounded-sm transition"> 
                    <Image src="/Delete.png" alt="Delete" height={16} width={16}/> 
                    <span>Delete</span>
                  </button>
                  <button className="text-white hover:bg-blue-500 w-full flex items-center justify-between px-2 py-1.5 text-xs rounded-sm transition">
                    <Image src="/edit.svg" alt="Edit" height={16} width={16}/> 
                    <span>Edit</span>
                  </button>
                  <button className="text-white hover:bg-blue-500 w-full flex items-center justify-between px-2 py-1.5 text-xs rounded-sm transition">
                    <Image src="/share.svg" alt="Share" height={16} width={16}/> 
                    <span>Share</span>
                  </button>
                  <div className="border-t border-gray-700 my-1"></div>
                  <button className="text-gray-400 hover:text-white text-left px-2 py-1 text-xs">
                    More
                  </button>
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}