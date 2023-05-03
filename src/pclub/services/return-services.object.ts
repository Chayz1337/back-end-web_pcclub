import { Prisma } from "@prisma/client";

export const returnClient: Prisma.servicesSelect = {
  id_service: true,
  name: true,
  price_on_hour: true,
}