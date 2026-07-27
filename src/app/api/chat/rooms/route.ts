import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const userId = user.id;

    const participantEntries = await prisma.chatParticipant.findMany({
      where: { participantId: userId },
      select: { roomId: true },
    });
    const roomIds = participantEntries.map((p) => p.roomId);

    if (roomIds.length === 0) {
      return new Response(JSON.stringify({ rooms: [] }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const rooms = await prisma.chatRoom.findMany({
      where: { id: { in: roomIds } },
      include: {
        participants: true,
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
        department: { select: { name: true } },
      },
    });

    const otherParticipantIds = new Set<string>();
    rooms.forEach((room) => {
      if (room.type === "DIRECT") {
        const other = room.participants.find((p) => p.participantId !== userId);
        if (other) otherParticipantIds.add(other.participantId);
      }
    });

    const [otherStudents, otherTeachers, otherAdmins] = await Promise.all([
      prisma.student.findMany({
        where: { id: { in: Array.from(otherParticipantIds) } },
        select: { id: true, firstName: true, lastName: true },
      }),
      prisma.teacher.findMany({
        where: { id: { in: Array.from(otherParticipantIds) } },
        select: { id: true, firstName: true, lastName: true },
      }),
      prisma.admin.findMany({
        where: { id: { in: Array.from(otherParticipantIds) } },
        select: { id: true, userName: true },
      }),
    ]);

    const nameLookup = new Map<string, string>();
    otherStudents.forEach((s) => nameLookup.set(s.id, `${s.firstName} ${s.lastName}`));
    otherTeachers.forEach((t) => nameLookup.set(t.id, `${t.firstName} ${t.lastName}`));
    otherAdmins.forEach((a) => nameLookup.set(a.id, a.userName));

    const shaped = rooms.map((room) => {
      const lastMessage = room.messages[0] || null;

      let displayName = room.name;
      if (room.type === "DIRECT") {
        const other = room.participants.find((p) => p.participantId !== userId);
        displayName = other ? nameLookup.get(other.participantId) || "Unknown User" : "Unknown";
      } else if (room.type === "DEPARTMENT") {
        displayName = room.department?.name ? `${room.department.name} Community` : room.name;
      }

      return {
        id: room.id,
        type: room.type,
        name: displayName,
        lastMessage: lastMessage?.content || "No messages yet",
        lastMessageAt: lastMessage?.createdAt || room.createdAt,
      };
    });

    shaped.sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());

    return new Response(JSON.stringify({ rooms: shaped }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/chat/rooms error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch rooms" }), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { targetUserId, targetType } = await req.json();
    if (!targetUserId || !targetType) {
      return new Response(JSON.stringify({ error: "targetUserId and targetType are required" }), { status: 400 });
    }

    const existingRooms = await prisma.chatRoom.findMany({
      where: {
        type: "DIRECT",
        participants: { some: { participantId: user.id } },
      },
      include: { participants: true },
    });

    const existing = existingRooms.find(
      (room) =>
        room.participants.length === 2 &&
        room.participants.some((p) => p.participantId === targetUserId)
    );

    if (existing) {
      return new Response(JSON.stringify({ roomId: existing.id, created: false }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const myRole = (user.publicMetadata?.role as string) || "student";
    const myType = myRole.toUpperCase() as "STUDENT" | "TEACHER" | "ADMIN";

    const newRoom = await prisma.chatRoom.create({
      data: {
        type: "DIRECT",
        participants: {
          create: [
            { participantId: user.id, participantType: myType },
            { participantId: targetUserId, participantType: targetType },
          ],
        },
      },
    });

    return new Response(JSON.stringify({ roomId: newRoom.id, created: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST /api/chat/rooms error:", error);
    return new Response(JSON.stringify({ error: "Failed to create room" }), { status: 500 });
  }
}
