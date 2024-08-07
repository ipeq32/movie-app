import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";
const prisma = new PrismaClient();
async function main() {
  const password = hashSync("1234asdf", 12);

  const existingUser = await prisma.user.findUnique({
    where: {
      email: "admin@admin.com",
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        email: "admin@admin.com",
        hashedPassword: password,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
