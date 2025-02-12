import { Hono } from "hono";

export const createRoute = new Hono();

createRoute.post("/", (c) => {
  return c.text("Hello, World!");
});
