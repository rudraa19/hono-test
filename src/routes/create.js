import { Hono } from "hono";
import { todos } from "../store"
export const createRoute = new Hono();

createRoute.post("/", async (c) => {
  const { title, desc } = await c.req.json();
  const id = todos.length + 1;
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

