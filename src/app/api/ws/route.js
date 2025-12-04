// src/app/api/ws/route.js
export const config = { runtime: "nodejs" };

let wss; // store WebSocket server globally

export async function GET(req) {
  const { socket } = req;

  // Initialize WebSocket server only once
  if (!socket.server.ws) {
    console.log("Starting WebSocket server...");
    const WebSocket = require("ws"); // ✅ server-side only
    wss = new WebSocket.Server({ noServer: true });

    socket.server.ws = wss;

    // Upgrade HTTP -> WebSocket
    socket.server.on("upgrade", (req, socket, head) => {
      if (req.url === "/api/ws") {
        wss.handleUpgrade(req, socket, head, (ws) => {
          wss.emit("connection", ws, req);
        });
      }
    });

    wss.on("connection", (ws) => {
      console.log("Client connected");
    });

    // Broadcast function
    socket.server.broadcast = (msg) => {
      console.log("Broadcasting:", msg);
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "announcement", message: msg }));
        }
      });
    };
  }

  return new Response("WebSocket server initialized");
}
