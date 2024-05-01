import Elysia, { Context, RouteSchema } from "elysia";
import response from "../../core/response";

const userController = {
  profile: (req: Context) => {
    return response({
      data: {
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
