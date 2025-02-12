import { Hono } from "hono";
import { createRoute } from "./routes/create";
import { getRoute } from "./routes/get";
import { getTodoByIdRoute } from "./routes/getById";
import { putTodoByIdRoute } from "./routes/putById";

const app = new Hono();

app.route("/todos", createRoute);
app.route("/todos", getRoute);
app.route("/todos", getTodoByIdRoute);
app.route("/todos", putTodoByIdRoute);

export default app;
