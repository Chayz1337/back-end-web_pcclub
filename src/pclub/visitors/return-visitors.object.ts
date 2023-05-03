import { Prisma } from "@prisma/client";

export const returnCourier: Prisma.visitorsSelect = {
  id_visitors: true,
  full_name: true,
  birthday: true,
  constancy: true
}