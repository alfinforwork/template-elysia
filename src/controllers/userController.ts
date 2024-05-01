import Elysia, { Context, RouteSchema } from "elysia";
import response from "../../core/response";
import UserService from "../services/user.service";

const userService = new UserService();

const userController = {
  profile: async (req: Context) => {
    const user = await userService.findOneById(0);

    return response({
      data: {
        ...user,
        name: "alfin",
        email: "alfinforwork@gmail.com",
      },
    });
  },
  changeImage: (req: Context<{ body: { image: File[]; title: string } }>) => {
    const { image, title } = req.body;
    return response({
      data: {
        title,
        image: image[0]?.name,
      },
    });
  },
};

export default userController;
