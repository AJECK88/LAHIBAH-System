import { WebSocketServer } from "ws";

let wss;

export function getWSS(server) {
  if (!wss) {
    wss = new WebSocketServer({ noServer: true });

    server.on("upgrade", (req, socket, head) => {
      if (req.url === "/api/ws") {
        wss.handleUpgrade(req, socket, head, (ws) => {
          wss.emit("connection", ws, req);
        });
      }
    });

    wss.on("connection", () => {
      console.log("WebSocket client connected");
    });
  }

  return wss;
}
export function broadcast(message , title, date, id , times) {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify({ type: "announcement", message, title, id, date, times }));
    }
  });
}
