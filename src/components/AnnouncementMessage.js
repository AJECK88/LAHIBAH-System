'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AnnouncementsPage({ AnnouncementData = [] }) {
  const safeAnnouncements = Array.isArray(AnnouncementData) ? AnnouncementData : [];
  const [messages, setMessages] = useState(safeAnnouncements);
  const scrollRef = useRef(null);

  // Auto-scroll when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Real-Time SSE Stream Listener
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const protocol = window.location.protocol;
    const eventSource = new EventSource(`${protocol}//${window.location.host}/api/ws`);

    eventSource.onopen = () => {
      console.log("Connected to Real-Time SSE Announcement Stream!");
    };

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [
          ...prev,
          {
            id: data.id,
            title: data.title,
            message: data.message,
            date: data.createdAt || data.date || new Date().toISOString(),
            senderName: data.senderName || data.authorName || "Administration",
            senderPhoto: data.senderPhoto || data.authorPhoto || null,
          },
        ]);
      } catch (err) {
        console.error("Error parsing incoming announcement stream:", err);
      }
    };

    eventSource.onerror = (error) => {
      console.error("Stream connection error:", error);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="h-full overflow-y-auto space-y-4 p-1 pb-16 scrollbar-thin scrollbar-thumb-slate-200"
    >
      {messages.map((msg, i) => {
        // Safe Date Parsing
        const messageDate = msg.date ? new Date(msg.date) : new Date();
        const isValidDate = !isNaN(messageDate.getTime());

        const formattedDate = isValidDate
          ? new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }).format(messageDate)
          : "Recent";

        const formattedTime = isValidDate
          ? messageDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "";

        // Fallback Sender Avatar Handling
        const senderName = msg.senderName || "Admin Office";
        const senderInitials = senderName
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();

        return (
          <div
            key={msg.id || i}
            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 md:p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
          >
            {/* Left: Sender Avatar & Metadata */}
            <div className="flex items-center gap-3.5 min-w-[210px] shrink-0 border-b md:border-b-0 md:border-r border-slate-100 pb-3 md:pb-0 md:pr-5">
              {msg.senderPhoto ? (
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200/80 shrink-0 shadow-sm">
                  <Image
                    src={msg.senderPhoto}
                    alt={senderName}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0 tracking-wider">
                  {senderInitials}
                </div>
              )}

              <div className="flex flex-col space-y-0.5">
                <span className="text-sm font-semibold text-slate-900 tracking-tight line-clamp-1">
                  {senderName}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <span>{formattedDate}</span>
                  {formattedTime && (
                    <>
                      <span>•</span>
                      <span>{formattedTime}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Middle: Announcement Title & Content */}
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="text-base font-bold text-slate-800 tracking-tight line-clamp-1">
                {msg.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                {msg.message}
              </p>
            </div>

            {/* Right: Actions & Dropdown Menu */}
            <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              <button className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50/60 hover:bg-blue-100/80 border border-blue-200/60 rounded-xl transition-colors">
                Details
              </button>

              {/* Action Dropdown */}
              <div className="relative group/menu inline-block">
                <button
                  type="button"
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Options"
                >
                  <Image
                    src="/veticalDoits.svg"
                    alt="Options"
                    width={18}
                    height={18}
                    className="opacity-60 group-hover/menu:opacity-100 transition-opacity"
                  />
                </button>

                {/* Dropdown Options List */}
                <div className="absolute right-0 top-full mt-1.5 w-40 bg-slate-900 text-slate-200 rounded-xl hidden group-hover/menu:flex flex-col z-30 p-1.5 shadow-xl border border-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                    <Image src="/edit.svg" alt="Edit" height={14} width={14} />
                    <span>Edit</span>
                  </button>
                  
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                    <Image src="/share.svg" alt="Share" height={14} width={14} />
                    <span>Share</span>
                  </button>

                  <div className="border-t border-slate-800/80 my-1"></div>

                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-rose-400 rounded-lg hover:bg-rose-500/20 hover:text-rose-300 transition-colors">
                    <Image src="/Delete.png" alt="Delete" height={14} width={14} />
                    <span>Delete</span>
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