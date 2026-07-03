// app/(chat)/layout.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ChatItem {
  id: string;
  name: string;
  lastMsg: string;
  time: string;
}

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'people'>('students');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Move activeChats into a State array so it can update dynamically
  const [activeChats, setActiveChats] = useState<ChatItem[]>([
    { id: 'lahiba-devs', name: 'LAHIBA system developers', lastMsg: 'Glory: Reacted to your message', time: 'Yesterday' },
    { id: 'arnold-d', name: 'Arnold D', lastMsg: 'yeah, see you then!', time: '12:09 PM' },
  ]);

  // Mock Directories simulating database fetch
  const directoryData = {
    students: [
      { id: 'destiny-senior', name: 'Destiny Senior', details: 'HND CS - Level 200' },
      { id: 'blessing-amara', name: 'Blessing Amara', details: 'HND SWE - Level 300' }
    ],
    teachers: [
      { id: 'arnold-d-prof', name: 'Dr. Arnold D', details: 'Advanced Software Architect' },
      { id: 'nkelle-engr', name: 'Engr. Nkelle', details: 'Database Administrator' }
    ],
    people: [
      { id: 'glory-agent', name: 'Glory Security Agent', details: 'System Overseer' },
      { id: 'lesly-admin', name: 'Lesly Admin', details: 'Global Operations' }
    ]
  };

  const currentTabList = directoryData[activeTab].filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. Modified handle function to permanently pin them to the sidebar
  const handleAddToChat = (userId: string, name: string) => {
    // Check if the conversation item already exists in your sidebar list
    const chatExists = activeChats.some(chat => chat.id === userId);

    if (!chatExists) {
      const newChatSlot: ChatItem = {
        id: userId,
        name: name,
        lastMsg: 'Chat created. Say hi!',
        time: 'Just now'
      };
      
      // Prepend to the top of your sidebar state array
      setActiveChats(prevChats => [newChatSlot, ...prevChats]);
    }

    // Close the search interface
    setIsModalOpen(false);
    setSearchQuery('');

    // Automatically navigate the user into the newly generated workspace route
    router.push(`/messages/${userId}`);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#111b21] text-[#e9edef] antialiased">
      
      {/* FAR-LEFT UTILITY BAR */}
      <aside className="flex flex-col items-center justify-between w-16 h-full bg-[#202c33] border-r border-[#222e35] py-4 flex-shrink-0">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black cursor-pointer">L</div>
        </div>
      </aside>

      {/* CONVERSATIONS LIST SIDEBAR CONTAINER */}
      <section className="w-[380px] h-full bg-[#111b21] border-r border-[#222e35] flex flex-col relative flex-shrink-0">
        <div className="p-4 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Chats</h1>
          <div className="flex items-center bg-[#202c33] rounded-lg px-3 py-1.5">
            <input type="text" placeholder="Search chats..." className="w-full bg-transparent text-sm focus:outline-none placeholder-[#677781]" />
          </div>
        </div>

        {/* Chat List Window */}
        <div className="flex-1 overflow-y-auto">
          {activeChats.map((chat) => (
            <button 
              key={chat.id} 
              onClick={() => router.push(`/messages/${chat.id}`)}
              className="w-full text-left flex items-center gap-3 p-3 hover:bg-[#202c33]/70 border-b border-[#222e35]/30 transition-colors block"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                  <span className="text-xs text-[#8696a0]">{chat.time}</span>
                </div>
                <p className="text-xs text-[#8696a0] truncate mt-0.5">{chat.lastMsg}</p>
              </div>
            </button>
          ))}
        </div>

        {/* FLOATING ACTION BUTTON (FAB) */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-[#111b21] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all active:scale-95 z-40 group"
          title="Add People"
        >
          <svg className="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </section>

      {/* DYNAMIC CHAT DISPLAY AREA */}
      <main className="flex-1 h-full relative bg-[#0b141a]">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none" />
        <div className="relative z-10 h-full w-full">{children}</div>
      </main>

      {/* SYSTEM DIRECTORY MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-[#222e35] w-[450px] rounded-xl shadow-2xl overflow-hidden border border-[#2a3942] flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-[#2a3942] flex justify-between items-center bg-[#202c33]">
              <h2 className="text-md font-semibold text-[#e9edef]">Start a Conversation</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-[#8696a0] hover:text-[#e9edef] p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Search Input */}
            <div className="p-3 bg-[#111b21]">
              <input 
                type="text"
                placeholder={`Search across ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#2a3942] text-sm text-[#e9edef] rounded-lg px-3 py-2 outline-none placeholder-[#8696a0]"
              />
            </div>

            {/* Tab Swappers */}
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

            {/* Scrollable Result Output Feed */}
            <div className="flex-1 overflow-y-auto divide-y divide-[#2a3942]/40 bg-[#111b21]">
              {currentTabList.length > 0 ? (
                currentTabList.map((user) => (
                  <div 
                    key={user.id} 
                    onClick={() => handleAddToChat(user.id, user.name)}
                    className="flex items-center gap-3 p-3 hover:bg-[#202c33] cursor-pointer transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-600 flex-shrink-0" />
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