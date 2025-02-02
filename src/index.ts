import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import routes from "./routes";
import response from "../core/response";

const app = new Elysia();

app
.onError(({ code }) => {
  return response({ message: code });
})
.use(swagger({ path: "/docs", exclude: ["/docs", "/docs/json"] }))
.use(routes)
.get("/", (data) => {
  return response({
    data: {
      hello: "world",
    },
  });
})
.listen(3000);

console.log(
`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
