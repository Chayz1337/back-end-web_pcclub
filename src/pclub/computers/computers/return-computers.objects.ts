import { Prisma } from "@prisma/client";

export const returnClient: Prisma.computersSelect = {
  id_computers: true,
  specifications: true,
  date_of_last_service: true,
}