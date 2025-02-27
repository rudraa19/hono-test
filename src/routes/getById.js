import { Hono } from "hono";

export const getTodoByIdRoute = new Hono();

getTodoByIdRoute.get("/:id", (ctx) => {
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

  return ctx.json(
    {
      error: false,
      message: "Todo Fetched",
      data: todo,
    },
    200
  );
});
