// app/(chat)/messages/[roomId]/page.tsx
import React from 'react';
import ChatRoomWindow from './ChatRoomWindow';

interface PageProps {
  params: { roomId: string };
}

export default async function RoomPage({ params }: PageProps) {
  const { roomId } = params;

  // In production, you would fetch real entries here from your database:
  // const initialMessages = await db.messages.findMany({ where: { roomId } });
  const mockOldMessages = [
    { id: '1', content: 'Hey team, how goes the system layout design?', senderId: 'user-2', senderName: 'Arnold D', createdAt: new Date() },
    { id: '2', content: 'Going great, building it with Next.js App Router!', senderId: 'me', senderName: 'You', createdAt: new Date() }
  ];

  const currentUser = { id: 'me', name: 'You' };

  return (
    <ChatRoomWindow 
      roomId={roomId} 
      initialMessages={mockOldMessages} 
      currentUser={currentUser} 
    />
  );
}