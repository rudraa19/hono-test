import { Hono } from "hono";
import { todos, removeTodo } from "../store";

export const delTodoByIdRoute = new Hono();

delTodoByIdRoute.delete("/:id", (c) => {
    const id = c.req.param('id');
    removeTodo(id);
    console.log(todos)
    return c.json({
        error: false,
        message: "Todo Deleted",
    })
})