import Elysia, { t } from "elysia";
import userController from "../controllers/userController";

const userRoutes = (app: Elysia) => {
  return app.group("/user", (groupApp) => {
    return groupApp
      .get("/user", userController.profile)
      .post("/image", userController.changeImage);
  });
};

export default userRoutes;
