import { Hono } from "hono";
import { addTodo } from "../store";
import { randomUUID } from "node:crypto";
export const createRoute = new Hono();

createRoute.post("/", async (c) => {
  const { title, desc } = await c.req.json();
  const id = randomUUID();
  addTodo({
    id,
    title,
    desc,
  });
  return c.json({
    error: false,
    message: "Todos Stored",
    data: {
      id,
    },
  });
});
