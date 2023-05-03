import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/pclub/prisma/prisma.service';
import { VisitsDto } from './dto/create-visits.dto';
import { returnVisits } from './return-visits.object';

@Injectable()
export class VisitsService {
  constructor(private prisma: PrismaService) {}

  async createVisits(dto: VisitsDto)
  {
    return this.prisma.visits.create({
      data: {
        ...dto
      }
    })
  }

  async getVisits() {
    return await this.prisma.visits.findMany({
      select: returnVisits
    })
  }

  async byId(id_visits: number) {
    const visits = await this.prisma.visits.findUnique({
      where: {
        id_visits
      },
      select: {
        ...returnVisits
      }
    })

    if (!visits){
      throw new BadRequestException('Visits not found')
    }

    return visits
  }

  async updateVisits(id_visits: number, dto: VisitsDto) {

    return this.prisma.visits.update({
      where: {
        id_visits: id_visits,
      },
      data: dto
    })
  }

  async deleteVisits(id_visits: number) {

    return this.prisma.visits.delete({
      where: {
        id_visits: id_visits,
      }
    })
  }
}