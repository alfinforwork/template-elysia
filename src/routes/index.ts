import Elysia from "elysia";
import userRoutes from "./user.routes";

const routes = (app: Elysia) => {
  return (
    app
      // this comment used for prevent the linter because we just have one route
      .group("/user", (app) => userRoutes(app))
  );
};
export default routes;
