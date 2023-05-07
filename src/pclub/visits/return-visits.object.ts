import { Prisma } from "@prisma/client";

export const returnVisits: Prisma.visitsSelect = {
  id_visits:true,
  data: true,
  computer: true,
  adminsid: true,
  computersid:true,
  visitors: {
    select: {
      id_visitors: true,
      full_name: true,
      birthday: true,
      constancy: true
    }
  },
  services: {
    select: {
      id_service: true,
      name: true,
      price_on_hour: true,
    }
  },
  admins:{
    select:{
      id_admins: true,
      full_name: true,
      telephone: true,
      email: true,
    }
  },
  computers:{
      select:{
          id_computers:true,
          specifications: true,
          date_of_last_service: true,
      }
  }
}
