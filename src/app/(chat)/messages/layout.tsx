
/* import { ClerkProvider } from "@clerk/nextjs"
import ClientLayout from "@/app/Parentlayout" 
import Navber from "@/components/navbar"
import { Menu } from "@/components/Menu"
import CopyRight from "@/components/CopyRigt"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
} */





// app/(chat)/layout.tsx
import React from 'react';

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  // Mock data for your sidebar chat list
  const activeChats = [
    { id: 'lahiba-devs', name: 'LAHIBA system developers', lastMsg: 'Glory: Reacted to your message', time: 'Yesterday', unread: false },
    { id: 'arnold-d', name: 'Arnold D', lastMsg: 'yeah, see you then!', time: '12:09 PM', unread: false },
    { id: 'study-group', name: 'STUDY GROUP CSN HND', lastMsg: 'Abeg yah', time: '6/23/26', unread: true },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#111b21] text-[#e9edef] antialiased">
      
      {/* FAR-LEFT UTILITY BAR */}
      <aside className="flex flex-col items-center justify-between w-16 h-full bg-[#202c33] border-r border-[#222e35] py-4 flex-shrink-0">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black cursor-pointer">
            L
          </div>
          <button className="text-[#aebac1] hover:text-[#e9edef]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </button>
        </div>
      </aside>

      {/* CONVERSATIONS LIST SIDEBAR */}
      <section className="w-[380px] h-full bg-[#111b21] border-r border-[#222e35] flex flex-col flex-shrink-0">
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Chats</h1>
          </div>
          <div className="flex items-center bg-[#202c33] rounded-lg px-3 py-1.5">
            <input 
              type="text" 
              placeholder="Search or start a new chat" 
              className="w-full bg-transparent text-sm focus:outline-none placeholder-[#677781]"
            />
          </div>
        </div>

        {/* Chat List Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {activeChats.map((chat) => (
            <a 
              key={chat.id} 
              href={`/messages/${chat.id}`}
              className="flex items-center gap-3 p-3 hover:bg-[#202c33]/70 border-b border-[#222e35]/30 transition-colors block"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                  <span className="text-xs text-[#8696a0]">{chat.time}</span>
                </div>
                <p className="text-xs text-[#8696a0] truncate mt-0.5">{chat.lastMsg}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DYNAMIC CHAT DISPLAY AREA */}
      <main className="flex-1 h-full relative bg-[#0b141a]">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none" />
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </main>

    </div>
  );
}
