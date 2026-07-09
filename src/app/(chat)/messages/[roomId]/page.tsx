// app/(chat)/messages/[roomId]/page.tsx
import React from 'react';
 import ChatRoomWindow from './ChatRoomWindow'; 

interface PageProps {
  // In Next.js 15+, params must be typed as a Promise
  params: Promise<{ roomId: string }>;
}

export default async function RoomPage({ params }: PageProps) {
  // Await the params promise before destructuring the roomId
  const { roomId } = await params;

  // In production, you would fetch real entries here from your database:
  // const initialMessages = await db.messages.findMany({ where: { roomId } });
  const mockOldMessages = [
    { id: '1', content: 'Hey team, how goes the system layout design?', senderId: 'user-2', senderName: 'Arnold D', createdAt: new Date() },
    { id: '2', content: 'Going great, building it with Next.js App Router!', senderId: 'me', senderName: 'You', createdAt: new Date() }
  ];

  const currentUser = { id: 'me', name: 'You' };

  return (
    <main className="w-full h-screen max-w-7xl mx-auto  p-0 sm:p-4 md:p-6 ">
    <ChatRoomWindow 
      roomId={roomId} 
      initialMessages={mockOldMessages} 
      currentUser={currentUser} 
    />
    </main> 
  );
}