import prisma from "../../lib/prisma";

export async function main() {
  // ... you will write your Prisma Client queries here
  const allAdmins = await prisma.admin.findMany();
  return console.log(allAdmins);
}
