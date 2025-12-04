import { broadcast } from "@/server/ws.js";


export async function POST(req) {
  const { message } = await req.json();
  if (!message) return new Response("Message required", { status: 400 });

  broadcast(message);

  return new Response(JSON.stringify({ status: "sent", message }));
}
