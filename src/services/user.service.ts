import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class UserService {
  findOneById(id: any) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
