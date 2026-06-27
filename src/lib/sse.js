// A global pool tracking active student data streams
let clients = new Set();

export function addClient(controller, encoder) {
  clients.add({ controller, encoder });
  console.log(`📡 Student joined stream. Active listeners: ${clients.size}`);
}

export function removeClient(clientObj) {
  clients.delete(clientObj);
  console.log(`🔌 Student disconnected. Active listeners: ${clients.size}`);
}

export function broadcastSSE(announcement) {
  const encoder = new TextEncoder();
  
  // Format the data explicitly for SSE specifications (must end in \n\n)
  const formattedMessage = `data: ${JSON.stringify(announcement)}\n\n`;
  const encodedChunk = encoder.encode(formattedMessage);

  console.log(`📢 Broadcasting announcement to ${clients.size} clients...`);
  
  clients.forEach((client) => {
    try {
      client.controller.enqueue(encodedChunk);
    } catch (err) {
      // Clean up dead/stale connections automatically
      clients.delete(client);
    }
  });
}