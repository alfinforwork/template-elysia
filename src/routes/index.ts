import Elysia from "elysia";
import userRoutes from "./user.routes";

const routes = (app: Elysia) => {
  return app.use(userRoutes);
};
export default routes;
