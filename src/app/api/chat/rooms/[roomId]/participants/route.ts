import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

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

    const myParticipation = await prisma.chatParticipant.findUnique({
      where: { roomId_participantId: { roomId, participantId: user.id } },
    });

    if (!myParticipation) {
      return new Response(JSON.stringify({ error: "Forbidden: not a member of this room" }), { status: 403 });
    }

    const participants = await prisma.chatParticipant.findMany({
      where: { roomId },
    });

    const studentIds = participants.filter((p) => p.participantType === "STUDENT").map((p) => p.participantId);
    const teacherIds = participants.filter((p) => p.participantType === "TEACHER").map((p) => p.participantId);
    const adminIds = participants.filter((p) => p.participantType === "ADMIN").map((p) => p.participantId);

    const [students, teachers, admins] = await Promise.all([
      prisma.student.findMany({
        where: { id: { in: studentIds } },
        select: { id: true, firstName: true, lastName: true, image: true },
      }),
      prisma.teacher.findMany({
        where: { id: { in: teacherIds } },
        select: { id: true, firstName: true, lastName: true, image: true },
      }),
      prisma.admin.findMany({
        where: { id: { in: adminIds } },
        select: { id: true, userName: true },
      }),
    ]);

    const shaped = [
      ...students.map((s) => ({
        id: s.id,
        name: `${s.firstName} ${s.lastName}`,
        image: s.image,
        type: "STUDENT" as const,
      })),
      ...teachers.map((t) => ({
        id: t.id,
        name: `${t.firstName} ${t.lastName}`,
        image: t.image,
        type: "TEACHER" as const,
      })),
      ...admins.map((a) => ({
        id: a.id,
        name: a.userName,
        image: null,
        type: "ADMIN" as const,
      })),
    ];

    shaped.sort((a, b) => {
      const rank = (t: string) => (t === "TEACHER" ? 0 : t === "ADMIN" ? 1 : 2);
      const rankDiff = rank(a.type) - rank(b.type);
      if (rankDiff !== 0) return rankDiff;
      return a.name.localeCompare(b.name);
    });

    return new Response(JSON.stringify({ participants: shaped }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/chat/rooms/[roomId]/participants error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch participants" }), { status: 500 });
  }
}
