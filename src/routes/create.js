import { Hono } from "hono";
import { todos } from "../store"
import { randomUUID } from "node:crypto"
export const createRoute = new Hono();

createRoute.post("/", async (c) => {
  const { title, desc } = await c.req.json();
  const id = randomUUID();
  todos.push({
    id,
    title,
    desc
  })
  return c.json({
    error: false,
    message: "Todos Stored",
    data: {
      id
    },

  });
});

