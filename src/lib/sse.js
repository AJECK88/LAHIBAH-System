// A global pool tracking active data streams, now tagged with userId
let clients = new Set();

export function addClient(controller, encoder, userId) {
  const clientRecord = { controller, encoder, userId };
  clients.add(clientRecord);
  console.log(`📡 Client joined stream (userId: ${userId}). Active listeners: ${clients.size}`);
  return clientRecord;
}

export function removeClient(clientObj) {
  clients.delete(clientObj);
  console.log(`🔌 Client disconnected (userId: ${clientObj.userId}). Active listeners: ${clients.size}`);
}

// Broadcasts to EVERY connected client (used for announcements)
export function broadcastSSE(payload) {
  const encoder = new TextEncoder();
  const formattedMessage = `data: ${JSON.stringify(payload)}\n\n`;
  const encodedChunk = encoder.encode(formattedMessage);
  console.log(`📢 Broadcasting to ${clients.size} clients...`);

  clients.forEach((client) => {
    try {
      client.controller.enqueue(encodedChunk);
    } catch (err) {
      clients.delete(client);
    }
  });
}

// Broadcasts ONLY to the given list of userIds (used for chat)
export function broadcastToUsers(userIds, payload) {
  const encoder = new TextEncoder();
  const formattedMessage = `data: ${JSON.stringify(payload)}\n\n`;
  const encodedChunk = encoder.encode(formattedMessage);

  let sentCount = 0;
  clients.forEach((client) => {
    if (userIds.includes(client.userId)) {
      try {
        client.controller.enqueue(encodedChunk);
        sentCount++;
      } catch (err) {
        clients.delete(client);
      }
    }
  });
  console.log(`💬 Sent chat message to ${sentCount} of ${userIds.length} targeted users.`);
}
