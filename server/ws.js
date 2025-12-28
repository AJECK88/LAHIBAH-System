
import { WebSocketServer } from "ws";
let wss;

if (!global.wss) {
  global.wss = new WebSocketServer({ port: 3001 });
  console.log("WebSocket server running on ws://localhost:3001");

  global.wss.on("connection", (ws) => {
    console.log("Client connected");
  });
}

wss = global.wss;

export function broadcast(message , title, date, times) {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify({ type: "announcement", message , title, id, date, times }));
    }
  });
}
