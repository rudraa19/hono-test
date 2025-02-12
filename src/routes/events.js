import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { addSocket, removeSocket } from "../store";

export const { upgradeWebSocket, websocket } = createBunWebSocket();

export const eventsRoute = new Hono();

eventsRoute.get(
  "/events",
  upgradeWebSocket(() => {
    return {
      onOpen(event, ws) {
        addSocket(ws, ws.url.searchParams.get("id"));
        console.log("Connection Opened");
      },
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`);
        ws.send("Hello from server!");
      },
      onClose: (event, ws) => {
        removeSocket(ws.url.searchParams.get("id"));
        console.log("Connection Closed");
      },
    };
  })
);
