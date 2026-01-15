import { broadcast } from "@/lib/ws";

export async function POST(req) {
  try {
    const { message, title } = await req.json();

    if (!message) {
      return new Response("Message required", { status: 400 });
    }

    // Generate timestamps
    const now = new Date();
    const date = now.toISOString();
    const time = now.toLocaleTimeString();

    // Create announcement payload
    const announcement = {
      type: "announcement",
      message,
      title,
      date,
      time,
      id, // Add unique identifier
    };

    // Broadcast full announcement object
    broadcast(announcement);

    // Respond to client
    return new Response(JSON.stringify({
      status: "sent",
      ...announcement
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("Announcement POST error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
