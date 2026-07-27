import React from 'react';
import ChatRoomWindow from './ChatRoomWindow';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ roomId: string }>;
}

async function resolveParticipantName(participantId: string): Promise<string> {
  const student = await prisma.student.findUnique({
    where: { id: participantId },
    select: { firstName: true, lastName: true },
  });
  if (student) return `${student.firstName} ${student.lastName}`;

  const teacher = await prisma.teacher.findUnique({
    where: { id: participantId },
    select: { firstName: true, lastName: true },
  });
  if (teacher) return `${teacher.firstName} ${teacher.lastName}`;

  const admin = await prisma.admin.findUnique({
    where: { id: participantId },
    select: { userName: true },
  });
  if (admin) return admin.userName;

  return 'Unknown User';
}

export default async function RoomPage({ params }: PageProps) {
  const { roomId } = await params;
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  const participant = await prisma.chatParticipant.findUnique({
    where: { roomId_participantId: { roomId, participantId: user.id } },
  });

  if (!participant) {
    return (
      <main className="w-full h-screen flex items-center justify-center text-[#8696a0] text-sm">
        You are not a member of this conversation.
      </main>
    );
  }

  const room = await prisma.chatRoom.findUnique({
    where: { id: roomId },
    include: {
      department: { select: { name: true } },
      participants: true,
    },
  });

  const messages = await prisma.chatMessage.findMany({
    where: { roomId },
    orderBy: { createdAt: 'asc' },
  });

  const initialMessages = messages.map((m) => ({
    id: m.id,
    content: m.content,
    senderId: m.senderId,
    senderName: m.senderName,
    createdAt: m.createdAt,
  }));

  let roomName = room?.name || roomId;
  if (room?.type === 'DEPARTMENT' && room.department?.name) {
    roomName = `${room.department.name} Community`;
  } else if (room?.type === 'DIRECT') {
    const other = room.participants.find((p) => p.participantId !== user.id);
    roomName = other ? await resolveParticipantName(other.participantId) : 'Unknown User';
  }

  const currentUserName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username || 'You';
  const currentUserData = { id: user.id, name: currentUserName };

  return (
    <main className="w-full h-screen max-w-7xl mx-auto p-0 sm:p-4 md:p-6">
      <ChatRoomWindow
        roomId={roomId}
        roomName={roomName}
        initialMessages={initialMessages}
        currentUser={currentUserData}
      />
    </main>
  );
}
