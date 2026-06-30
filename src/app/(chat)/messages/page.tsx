// app/(chat)/page.tsx
import React from 'react';

export default function EmptyChatPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center p-6">
      <div className="w-20 h-20 bg-[#202c33] rounded-full flex items-center justify-center text-[#8696a0] mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h2 className="text-lg font-light text-[#e9edef]">LAHIBA Web Messenger</h2>
      <p className="text-sm text-[#8696a0] max-w-sm mt-1">
        Select a conversation from the sidebar layout list to start sending and receiving real-time messages.
      </p>
    </div>
  );
}