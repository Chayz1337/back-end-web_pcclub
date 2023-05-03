import { Prisma } from "@prisma/client";

export const returnClient: Prisma.adminsSelect = {
  id_admins: true,
  full_name: true,
  telephone: true,
  email: true,
  visitid: true
}