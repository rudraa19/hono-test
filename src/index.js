import { Hono } from "hono";
import { createRoute } from "./routes/create";
import { getRoute } from "./routes/get";

const app = new Hono();

app.route("/todos", createRoute);
app.route("/todos", getRoute);

export default app;
