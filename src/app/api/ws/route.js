import { addClient, removeClient } from "@/lib/sse";
import { currentUser } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const user = await currentUser();
  const userId = user?.id || null;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const clientRecord = addClient(controller, encoder, userId);

      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": keepalive ping\n\n"));
        } catch (e) {
          clearInterval(heartbeat);
        }
      }, 15000);

      req.signal.addEventListener("abort", () => {
        clearInterval(heartbeat);
        removeClient(clientRecord);
        try {
          controller.close();
        } catch (e) {}
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "Content-Encoding": "none",
    },
  });
}
