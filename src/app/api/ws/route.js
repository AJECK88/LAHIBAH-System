import { addClient, removeClient } from "@/lib/sse";

export const dynamic = "force-dynamic"; // Strictly bypasses Vercel compilation caching

export async function GET(req) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const clientRecord = { controller, encoder };
      addClient(controller, encoder);

      // Keep connection from idling out on Vercel using a tiny heartbeat ping
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": keepalive ping\n\n"));
        } catch (e) {
          clearInterval(heartbeat);
        }
      }, 15000);

      // Triggers cleanup immediately if a student closes their tab or navigates away
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