import { Hono } from "hono";
import { createRoute } from "./routes/create";
import { getRoute } from "./routes/get";
import { getTodoByIdRoute } from "./routes/getById";

const app = new Hono();

app.route("/todos", createRoute);
app.route("/todos", getRoute);
app.route("/todos/:id", getTodoByIdRoute);

export default app;
