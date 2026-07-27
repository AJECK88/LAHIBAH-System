import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { broadcastToUsers } from "@/lib/sse";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ roomId: string }> }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { roomId } = await params;

    const participant = await prisma.chatParticipant.findUnique({
      where: { roomId_participantId: { roomId, participantId: user.id } },
    });

    if (!participant) {
      return new Response(JSON.stringify({ error: "Forbidden: not a member of this room" }), { status: 403 });
    }

    const messages = await prisma.chatMessage.findMany({
      where: { roomId },
      orderBy: { createdAt: "asc" },
    });

    const shaped = messages.map((m) => ({
      id: m.id,
      content: m.content,
      senderId: m.senderId,
      senderName: m.senderName,
      createdAt: m.createdAt,
    }));

    return new Response(JSON.stringify({ messages: shaped }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/chat/rooms/[roomId]/messages error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ roomId: string }> }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { roomId } = await params;

    // Confirm sender is actually a participant of this room
    const senderParticipant = await prisma.chatParticipant.findUnique({
      where: { roomId_participantId: { roomId, participantId: user.id } },
    });

    if (!senderParticipant) {
      return new Response(JSON.stringify({ error: "Forbidden: not a member of this room" }), { status: 403 });
    }

    const { content } = await req.json();
    if (!content || !content.trim()) {
      return new Response(JSON.stringify({ error: "Message content is required" }), { status: 400 });
    }

    const senderName = `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.username || "Unknown";

    const newMessage = await prisma.chatMessage.create({
      data: {
        roomId,
        senderId: user.id,
        senderName,
        content: content.trim(),
      },
    });

    // Get all participants of this room, to know who to notify
    const allParticipants = await prisma.chatParticipant.findMany({
      where: { roomId },
      select: { participantId: true },
    });
    const participantIds = allParticipants.map((p) => p.participantId);

    const livePayload = {
      type: "chat_message",
      roomId,
      id: newMessage.id,
      content: newMessage.content,
      senderId: newMessage.senderId,
      senderName: newMessage.senderName,
      createdAt: newMessage.createdAt,
    };

    broadcastToUsers(participantIds, livePayload);

    return new Response(JSON.stringify({ status: "sent", message: livePayload }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST /api/chat/rooms/[roomId]/messages error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
