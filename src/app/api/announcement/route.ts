import { broadcastSSE } from "@/lib/sse";
import { PrismaClient } from "@prisma/client"; 
import  {auth } from "@clerk/nextjs/server";
const prisma = new PrismaClient();

// 1. GET: Fetch current unread counts for a specific user
export async function GET(req: Request) {
  try {
    const { userId:sessionId,sessionClaims } = await auth();
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Unauthorized: Invalid session" }), { status: 401,
         headers: { "Content-Type": "application/json" }
       });


    }


   // Extracting userId and userType from session claims
   // for example, if you have a claim like "userType" in your session claims
   const  {searchParams} = new URL(req.url);
   const userType = (sessionClaims?.metaData  as any)?.role  ||  searchParams.get("userType");
 
    // Total announcements in the system
    const totalAnnouncements = await prisma.notification.count();

    // Total read entries matching this user's role criteria
    const readCount = await prisma.notificationRead.count({
      where: {
        studentId: userType === "student" ? sessionId : undefined,
        teacherId: userType === "teacher" ?  sessionId : undefined,
        adminId:   userType === "admin"   ?  sessionId: undefined,
      },
    });
    console.log("userType",userType)
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
export async function POST(req : Request) {
  try {
    const { userId: sessionId} = await auth();
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Unauthorized: Invalid session" }), { status: 401,
         headers: { "Content-Type": "application/json" }
       });
    }
    
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