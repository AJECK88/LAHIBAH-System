// app/(chat)/messages/[roomId]/ChatRoomWindow.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  createdAt: Date;
}

interface ChatRoomWindowProps {
  roomId: string;
  initialMessages: Message[];
  currentUser: { id: string; name: string };
}

export default function ChatRoomWindow({ roomId, initialMessages, currentUser }: ChatRoomWindowProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [textInput, setTextInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling feature for incoming traffic
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      content: textInput,
      senderId: currentUser.id,
      senderName: currentUser.name,
      createdAt: new Date()
    };

    // Append instantly on user client screen
    setMessages((prev) => [...prev, userMessage]);
    setTextInput('');

    // POST Request handler execution pipeline
    // await fetch('/api/messages', { method: 'POST', body: JSON.stringify({ roomId, content: textInput }) });
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* CHAT WINDOW WINDOW HEADER */}
      <header className="h-16 bg-[#202c33] flex items-center px-4 justify-between border-b border-[#222e35]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-700" />
          <div>
            <h3 className="text-sm font-medium tracking-wide capitalize">{roomId.replace('-', ' ')}</h3>
            <p className="text-[11px] text-[#8696a0]">online</p>
          </div>
        </div>
      </header>

      {/* MESSAGES FEED SCROLL CONTAINER */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {messages.map((msg) => {
          const isSenderMe = msg.senderId === currentUser.id;
          return (
            <div key={msg.id} className={`flex ${isSenderMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[65%] rounded-lg px-3 py-1.5 text-sm shadow-sm relative ${
                isSenderMe 
                  ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none' 
                  : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
              }`}>
                {!isSenderMe && <p className="text-[11px] text-emerald-400 font-medium mb-0.5">{msg.senderName}</p>}
                <p className="break-words leading-relaxed">{msg.content}</p>
                <span className="text-[9px] block text-right text-[#8696a0] mt-1 select-none">
                  12:00 PM
                </span>
              </div>
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>

      {/* BOTTOM CONTROL PANEL INPUT */}
      <form onSubmit={handleSend} className="h-16 bg-[#202c33] px-4 flex items-center gap-3">
        <input 
          type="text" 
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type a message" 
          className="flex-1 bg-[#2a3942] rounded-lg text-sm px-4 py-2.5 text-[#e9edef] placeholder-[#8696a0] focus:outline-none"
        />
        <button type="submit" className="text-emerald-500 hover:text-emerald-400 p-1">
          <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </button>
      </form>
    </div>
  );
}