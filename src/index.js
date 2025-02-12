import { Hono } from "hono";
import { createRoute } from "./routes/create";

const app = new Hono();

app.route("/todos", createRoute);

export default app;
