import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { addSocket } from "../store";
import { randomUUID } from "node:crypto";

export const { upgradeWebSocket, websocket } = createBunWebSocket();

export const eventsRoute = new Hono();

eventsRoute.get(
  "/events",
  upgradeWebSocket(() => {
    return {
      onOpen(ws) {
        addSocket(ws, randomUUID());
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
