import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";

export const { upgradeWebSocket, websocket } = createBunWebSocket();

export const eventsRoute = new Hono();

eventsRoute.get(
  "/events",
  upgradeWebSocket(() => {
    return {
      onOpen(ws) {
        console.log("Connection Opened");
      },
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`);
        ws.send("Hello from server!");
      },
      onClose: () => {
        console.log("Connection Closed");
      },
    };
  })
);
