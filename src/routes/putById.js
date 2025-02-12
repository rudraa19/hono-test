import { Hono } from "hono";
import { broadcast } from "../store";

export const putTodoByIdRoute = new Hono();

putTodoByIdRoute.put("/:id", async (ctx) => {
  const id = ctx.req.param("id");

  if (!id) {
    return ctx.json(
      {
        error: true,
        message: "Invalid ID",
      },
      400
    );
  }

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return ctx.json(
      {
        error: true,
        message: "Todo Not Found",
      },
      404
    );
  }

  const { title, desc } = await ctx.req.json();

  if (title) todo.title = title;
  if (desc) todo.desc = desc;

  broadcast({
    event: "UPD",
    data: {
      id
    }
  })

  return ctx.json(
    {
      error: false,
      message: "Todo Updated",
      data: todo,
    },
    200
  );
});
