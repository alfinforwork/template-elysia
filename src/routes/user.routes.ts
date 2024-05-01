import Elysia, { t } from "elysia";
import userController from "../controllers/userController";

const userRoutes = (app: Elysia<"/user">) => {
  return app
    .get("/", userController.profile)
    .post("/image", userController.changeImage);
};

export default userRoutes;
