import { Hono } from "hono";
import { todos } from "../store";

export const getRoute = new Hono();

getRoute.get("/", (ctx) => {
  return ctx.json(
    {
      error: false,
      message: "Todos Fetched",
      data: todos,
    },
    200
  );
});
