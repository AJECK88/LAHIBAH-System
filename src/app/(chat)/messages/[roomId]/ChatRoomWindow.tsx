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

interface Participant {
  id: string;
  name: string;
  image: string | null;
  type: 'STUDENT' | 'TEACHER' | 'ADMIN';
}

interface ChatRoomWindowProps {
  roomId: string;
  roomName: string;
  roomImage: string | null;
  roomType: string;
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

function Avatar({ name, image, size = 'w-10 h-10' }: { name: string; image: string | null; size?: string }) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt={name} className={`${size} rounded-full flex-shrink-0 object-cover`} />
    );
  }
  return (
    <div className={`${size} rounded-full bg-emerald-700 flex-shrink-0 flex items-center justify-center text-xs font-semibold text-emerald-100`}>
      {getInitials(name) || '?'}
    </div>
  );
}

function roleLabel(type: string) {
  if (type === 'TEACHER') return 'Teacher';
  if (type === 'ADMIN') return 'Administrator';
  return 'Student';
}

export default function ChatRoomWindow({ roomId, roomName, roomImage, roomType, initialMessages, currentUser }: ChatRoomWindowProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [textInput, setTextInput] = useState('');
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showMembers, setShowMembers] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [participantsLoading, setParticipantsLoading] = useState(false);
  const [startingChatWith, setStartingChatWith] = useState<string | null>(null);

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

  const openMembers = () => {
    setShowMembers(true);
    if (participants.length === 0) {
      setParticipantsLoading(true);
      fetch(`/api/chat/rooms/${roomId}/participants`)
        .then((res) => res.json())
        .then((data) => setParticipants(data.participants || []))
        .catch((err) => console.error('Failed to fetch participants:', err))
        .finally(() => setParticipantsLoading(false));
    }
  };

  const handleParticipantClick = async (participant: Participant) => {
    if (participant.id === currentUser.id || startingChatWith) return;
    setStartingChatWith(participant.id);
    try {
      const res = await fetch('/api/chat/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetUserId: participant.id, targetType: participant.type }),
      });
      const data = await res.json();
      if (res.ok && data.roomId) {
        setShowMembers(false);
        router.push(`/messages/${data.roomId}`);
      } else {
        console.error('Failed to start chat:', data.error);
      }
    } catch (err) {
      console.error('Start chat error:', err);
    } finally {
      setStartingChatWith(null);
    }
  };

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

  const canShowMembers = roomType === 'GROUP' || roomType === 'DEPARTMENT';
  const staffCount = participants.filter((p) => p.type === 'TEACHER' || p.type === 'ADMIN').length;
  const studentCount = participants.filter((p) => p.type === 'STUDENT').length;

  return (
    <div className="flex flex-col h-full w-full bg-[#0b141a] rounded-none shadow-md overflow-hidden relative">

      <header className="h-16 min-h-[64px] bg-[#202c33] flex items-center px-4 justify-between border-b border-[#222e35]">
        <div
          className={`flex items-center gap-3 ${canShowMembers ? 'cursor-pointer' : ''}`}
          onClick={canShowMembers ? openMembers : undefined}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); router.push('/messages'); }}
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
            <p className="text-[11px] text-[#8696a0]">
              {canShowMembers ? 'Tap for group info' : 'online'}
            </p>
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

      {/* Slide-down Group Info panel, WhatsApp/Telegram style */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#111b21] z-50 flex flex-col transition-transform duration-300 ease-out ${
          showMembers ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-16 min-h-[64px] bg-[#202c33] flex items-center gap-3 px-4 border-b border-[#222e35]">
          <button
            onClick={() => setShowMembers(false)}
            className="p-1.5 rounded-full text-[#8696a0] hover:bg-[#2a3942] hover:text-[#e9edef] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <h3 className="text-sm font-medium text-[#e9edef]">Group Info</h3>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col items-center py-8 bg-[#0b141a] border-b border-[#222e35]">
            <Avatar name={roomName} image={roomImage} size="w-24 h-24" />
            <h2 className="text-lg font-semibold text-[#e9edef] mt-4 px-4 text-center">{roomName}</h2>
            <p className="text-xs text-[#8696a0] mt-1">
              Group · {participants.length} participant{participants.length !== 1 ? 's' : ''}
            </p>
          </div>

          {!participantsLoading && participants.length > 0 && (
            <div className="px-4 py-3 border-b border-[#222e35] flex gap-6 text-xs text-[#8696a0]">
              <span>{staffCount} staff</span>
              <span>{studentCount} student{studentCount !== 1 ? 's' : ''}</span>
            </div>
          )}

          <div className="py-2">
            <p className="px-4 py-2 text-xs font-medium text-[#8696a0] uppercase tracking-wide">
              {participants.length} Participants · Tap to message
            </p>
            {participantsLoading ? (
              <p className="text-center text-xs text-[#8696a0] py-8">Loading members...</p>
            ) : (
              participants.map((p) => {
                const isStaff = p.type === 'TEACHER' || p.type === 'ADMIN';
                const isSelf = p.id === currentUser.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => handleParticipantClick(p)}
                    className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                      isSelf ? '' : 'hover:bg-[#202c33]/70 cursor-pointer'
                    } ${startingChatWith === p.id ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    <Avatar name={p.name} image={p.image} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#e9edef] truncate">
                        {p.name}
                        {isSelf ? <span className="text-[#8696a0]"> (You)</span> : null}
                      </p>
                    </div>
                    {isStaff && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-400 font-medium shrink-0">
                        {roleLabel(p.type)}
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
