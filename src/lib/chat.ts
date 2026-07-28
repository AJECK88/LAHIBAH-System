import prisma from "@/lib/prisma";

export async function ensureDepartmentChatRoom(departmentId: string) {
  const roomId = `dept-room-${departmentId}`;
  const room = await prisma.chatRoom.upsert({
    where: { id: roomId },
    update: {},
    create: { id: roomId, type: "DEPARTMENT", departmentId },
  });
  return room.id;
}

export async function addParticipantToRoom(
  roomId: string,
  participantId: string,
  participantType: "STUDENT" | "TEACHER" | "ADMIN"
) {
  await prisma.chatParticipant.upsert({
    where: { roomId_participantId: { roomId, participantId } },
    update: {},
    create: { roomId, participantId, participantType },
  });
}

export async function joinDepartmentChat(
  departmentId: string,
  participantId: string,
  participantType: "STUDENT" | "TEACHER" | "ADMIN"
) {
  const roomId = await ensureDepartmentChatRoom(departmentId);
  await addParticipantToRoom(roomId, participantId, participantType);
}
