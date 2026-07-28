'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  createdAt: Date | string;
}

interface ChatRoomWindowProps {
  roomId: string;
  roomName: string;
  roomImage: string | null;
  initialMessages: Message[];
  currentUser: { id: string; name: string };
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');
}

function Avatar({ name, image }: { name: string; image: string | null }) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt={name} className="w-10 h-10 rounded-full flex-shrink-0 object-cover" />
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-emerald-700 flex-shrink-0 flex items-center justify-center text-xs font-semibold text-emerald-100">
      {getInitials(name) || '?'}
    </div>
  );
}

export default function ChatRoomWindow({ roomId, roomName, roomImage, initialMessages, currentUser }: ChatRoomWindowProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [textInput, setTextInput] = useState('');
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const eventSource = new EventSource('/api/ws');

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'chat_message' && data.roomId === roomId) {
          setMessages((prev) => {
            if (prev.some((m) => m.id === data.id)) return prev;
            return [
              ...prev,
              {
                id: data.id,
                content: data.content,
                senderId: data.senderId,
                senderName: data.senderName,
                createdAt: data.createdAt,
              },
            ];
          });
        }
      } catch (err) {
        // ignore malformed/non-JSON events (e.g. heartbeat comments)
      }
    };

    eventSource.onerror = () => {
      // EventSource auto-reconnects on its own
    };

    return () => {
      eventSource.close();
    };
  }, [roomId]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const content = textInput.trim();
    if (!content || sending) return;

    setTextInput('');
    setSending(true);

    try {
      const res = await fetch(`/api/chat/rooms/${roomId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) {
        console.error('Failed to send message');
        setTextInput(content);
      }
    } catch (err) {
      console.error('Send error:', err);
      setTextInput(content);
    } finally {
      setSending(false);
    }
  };

  const formatMessageTime = (dateStr: Date | string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#0b141a] rounded-none shadow-md overflow-hidden">

      <header className="h-16 min-h-[64px] bg-[#202c33] flex items-center px-4 justify-between border-b border-[#222e35]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/messages')}
            className="block md:hidden p-1.5 rounded-full text-[#8696a0] hover:bg-[#2a3942] hover:text-[#e9edef] transition-colors shrink-0"
            title="Back to conversation list"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          <Avatar name={roomName} image={roomImage} />
          <div>
            <h3 className="text-sm font-medium tracking-wide text-[#e9edef]">
              {roomName}
            </h3>
            <p className="text-[11px] text-[#8696a0]">online</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {messages.map((msg) => {
          const isSenderMe = msg.senderId === currentUser.id;
          return (
            <div key={msg.id} className={`flex ${isSenderMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-[65%] rounded-lg px-3 py-1.5 text-sm shadow-sm relative ${
                isSenderMe
                  ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none'
                  : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
              }`}>
                {!isSenderMe && <p className="text-[11px] text-emerald-400 font-medium mb-0.5">{msg.senderName}</p>}
                <p className="break-words leading-relaxed">{msg.content}</p>
                <span className="text-[9px] block text-right text-[#8696a0] mt-1 select-none">
                  {formatMessageTime(msg.createdAt)}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={scrollRef} />
      </div>

      <form onSubmit={handleSend} className="h-16 min-h-[64px] bg-[#202c33] px-4 flex items-center gap-3 pb-safe">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type a message"
          disabled={sending}
          className="flex-1 bg-[#2a3942] rounded-lg text-base md:text-sm px-4 py-2.5 text-[#e9edef] placeholder-[#8696a0] focus:outline-none disabled:opacity-50"
        />
        <button type="submit" disabled={sending} className="text-emerald-500 hover:text-emerald-400 p-1 shrink-0 disabled:opacity-50">
          <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
          </svg>
        </button>
      </form>
    </div>
  );
}
