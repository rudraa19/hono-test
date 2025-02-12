import { Hono } from "hono";

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

  return ctx.json(
    {
      error: false,
      message: "Todo Updated",
      data: todo,
    },
    200
  );
});
