import { broadcastSSE } from "@/lib/sse";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 1. GET: Fetch current unread counts for a specific user
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const userType = searchParams.get("userType"); 

    if (!userId) {
      return new Response(JSON.stringify({ error: "Missing userId" }), { status: 400 });
    }

    // Total announcements in the system
    const totalAnnouncements = await prisma.notification.count();

    // Total read entries matching this user's role criteria
    const readCount = await prisma.notificationRead.count({
      where: {
        studentId: userType === "student" ? userId : undefined,
        teacherId: userType === "teacher" ? userId : undefined,
        adminId:   userType === "admin"   ? userId : undefined,
      },
    });

    const unreadCount = Math.max(0, totalAnnouncements - readCount);

    return new Response(JSON.stringify({ unread: unreadCount }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET Count Error:", error);
    return new Response(JSON.stringify({ error: "Database failure" }), { status: 500 });
  }
}

// 2. POST: Creating a new announcement and broadcasting updated count
export async function POST(req) {
  try {
    const { message, title, teacherId, adminId } = await req.json();

    if (!title || !message) {
      return new Response(JSON.stringify({ error: "Title and message are required" }), { status: 400 });
    }

    // Saving new announcement to the DB
    const NewAnnouncement = await prisma.notification.create({
      data: {
        title,
        message,
        teacherId: teacherId || null,
        adminId: adminId || null,
      },
      include: {
        admin: { select: { userName: true } },
        teacher: { select: { username: true } },
      },
    });

    // Getting the updated count directly from the DB 
    const CurrentTotalCount = await prisma.notification.count();

    const now = new Date();
    const livePayloadAnnouncement = {
      id: NewAnnouncement.id,
      title: NewAnnouncement.title,
     //Escape newlines so Node doesn't fragment the stream early
       message: NewAnnouncement.message,
      date: now.toISOString(),
      time: now.toLocaleTimeString(),
      senderName: NewAnnouncement.teacher?.username || NewAnnouncement.admin?.userName || "System", 
      updatedTotalCount: CurrentTotalCount,
    };

    // Forwarding via SSE memory buffers instantly (ONLY ONCE)
    broadcastSSE(livePayloadAnnouncement);
    console.log("Announcement broadcasted successfully:", NewAnnouncement.id);

    return new Response(JSON.stringify({ status: "sent", ...livePayloadAnnouncement }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("SSE Broadcast Error:", err);
    return new Response(JSON.stringify({ error: "Internal Error" }), { status: 500 });
  }
}