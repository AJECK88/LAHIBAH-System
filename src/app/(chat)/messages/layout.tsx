'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface ChatItem {
  id: string;
  type: string;
  name: string;
  image: string | null;
  lastMessage: string;
  lastMessageAt: string;
}

interface DirectoryUser {
  id: string;
  name: string;
  details: string;
  type: string;
  image: string | null;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');
}

function Avatar({ name, image, size = 'w-12 h-12' }: { name: string; image: string | null; size?: string }) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={name}
        className={`${size} rounded-full flex-shrink-0 object-cover`}
      />
    );
  }
  return (
    <div className={`${size} rounded-full bg-emerald-700 flex-shrink-0 flex items-center justify-center text-xs font-semibold text-emerald-100`}>
      {getInitials(name) || '?'}
    </div>
  );
}

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'people'>('students');
  const [searchQuery, setSearchQuery] = useState('');

  const [activeChats, setActiveChats] = useState<ChatItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [directoryData, setDirectoryData] = useState<{
    students: DirectoryUser[];
    teachers: DirectoryUser[];
    people: DirectoryUser[];
  }>({ students: [], teachers: [], people: [] });
  const [directoryLoading, setDirectoryLoading] = useState(false);
  const [creatingRoom, setCreatingRoom] = useState(false);

  const fetchRooms = async () => {
    try {
      const res = await fetch('/api/chat/rooms');
      const data = await res.json();
      setActiveChats(data.rooms || []);
    } catch (err) {
      console.error('Failed to fetch chat rooms:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (isModalOpen && directoryData.students.length === 0 && directoryData.teachers.length === 0) {
      setDirectoryLoading(true);
      fetch('/api/chat/users')
        .then((res) => res.json())
        .then((data) => {
          setDirectoryData({
            students: data.students || [],
            teachers: data.teachers || [],
            people: data.people || [],
          });
        })
        .catch((err) => console.error('Failed to fetch directory:', err))
        .finally(() => setDirectoryLoading(false));
    }
  }, [isModalOpen]);

  const currentTabList = directoryData[activeTab].filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToChat = async (targetUserId: string, targetType: string) => {
    setCreatingRoom(true);
    try {
      const res = await fetch('/api/chat/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetUserId, targetType }),
      });
      const data = await res.json();

      if (res.ok && data.roomId) {
        setIsModalOpen(false);
        setSearchQuery('');
        fetchRooms();
        router.push(`/messages/${data.roomId}`);
      } else {
        console.error('Failed to create room:', data.error);
      }
    } catch (err) {
      console.error('Room creation error:', err);
    } finally {
      setCreatingRoom(false);
    }
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#111b21] text-[#e9edef] antialiased">

      <aside className={`flex flex-col items-center justify-between w-16 h-full bg-[#202c33] border-r border-[#222e35] py-4 flex-shrink-0 ${
        pathname !== '/messages' ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="flex flex-col items-center gap-6 w-full">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 group"
            title="Return to Home"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:-translate-y-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black cursor-pointer">L</div>
        </div>
      </aside>

      <section className={`w-screen md:w-[380px] max-w-full h-full bg-[#111b21] border-r border-[#222e35] flex flex-col relative flex-shrink-0 ${
        pathname !== '/messages' ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="p-4 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Chats</h1>
          <div className="flex items-center bg-[#202c33] rounded-lg px-3 py-1.5">
            <input type="text" placeholder="Search chats..." className="w-full bg-transparent text-sm focus:outline-none placeholder-[#677781]" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <p className="text-center text-xs text-[#8696a0] py-8">Loading chats...</p>
          ) : activeChats.length === 0 ? (
            <p className="text-center text-xs text-[#8696a0] py-8">No conversations yet. Tap + to start one.</p>
          ) : (
            activeChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => router.push(`/messages/${chat.id}`)}
                className="w-full text-left flex items-center gap-3 p-3 hover:bg-[#202c33]/70 border-b border-[#222e35]/30 transition-colors"
              >
                <Avatar name={chat.name} image={chat.image} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                    <span className="text-xs text-[#8696a0]">{formatTime(chat.lastMessageAt)}</span>
                  </div>
                  <p className="text-xs text-[#8696a0] truncate mt-0.5">{chat.lastMessage}</p>
                </div>
              </button>
            ))
          )}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-6 right-12 md:right-12 md:p-right-12 sm:p-right-12 w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-[#111b21] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all active:scale-95 z-40 group shrink-0"
          title="Add People"
        >
          <svg className="w-6 h-6 sm:left-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </section>

      <main className={`flex-1 h-full relative bg-[#0b141a] ${
        pathname !== '/messages' ? 'block' : 'hidden md:block'
      }`}>
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none" />
        <div className="relative z-10 h-full w-full">{children}</div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="bg-[#222e35] w-full max-w-[450px] rounded-xl shadow-2xl overflow-hidden border border-[#2a3942] flex flex-col max-h-[85vh]">
            <div className="p-4 border-b border-[#2a3942] flex justify-between items-center bg-[#202c33]">
              <h2 className="text-md font-semibold text-[#e9edef]">Start a Conversation</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-[#8696a0] hover:text-[#e9edef] p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-3 bg-[#111b21]">
              <input
                type="text"
                placeholder={`Search across ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#2a3942] text-sm text-[#e9edef] rounded-lg px-3 py-2 outline-none placeholder-[#8696a0]"
              />
            </div>
            <div className="flex border-b border-[#2a3942] text-sm font-medium bg-[#202c33]">
              {(['students', 'teachers', 'people'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                  className={`flex-1 py-3 text-center transition-colors border-b-2 capitalize ${
                    activeTab === tab
                      ? 'border-emerald-500 text-emerald-400'
                      : 'border-transparent text-[#8696a0] hover:text-[#e9edef]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-[#2a3942]/40 bg-[#111b21]">
              {directoryLoading ? (
                <p className="text-center text-xs text-[#8696a0] py-8">Loading...</p>
              ) : currentTabList.length > 0 ? (
                currentTabList.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => !creatingRoom && handleAddToChat(user.id, user.type)}
                    className={`flex items-center gap-3 p-3 hover:bg-[#202c33] cursor-pointer transition-colors group ${creatingRoom ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    <Avatar name={user.name} image={user.image} size="w-10 h-10" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate text-[#e9edef] group-hover:text-emerald-400">{user.name}</h4>
                      <p className="text-xs text-[#8696a0] truncate mt-0.5">{user.details}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-xs text-[#8696a0] py-8">No system matches found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
