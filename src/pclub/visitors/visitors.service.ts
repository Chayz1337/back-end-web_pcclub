import { Injectable } from '@nestjs/common';
import { CreateVisitorsDto } from './dto/create-visitors.dto';
import { UpdateVisitorsDto } from './dto/update-visitors.dto';
import { PrismaService } from 'src/pclub/prisma/prisma.service';

@Injectable()
export class VisitorsService {
  constructor(private prisma: PrismaService) {}

  async create(CreateVisitorsDto: CreateVisitorsDto) {
    return await this.prisma.visitors.create({
      data: {...CreateVisitorsDto},
    });
  }

  findAll() {
    return this.prisma.visitors.findMany();
  }

  findOne(id: number) {
    return this.prisma.visitors.findUniqueOrThrow({
      where: {
        id_visitors: id,
      },
    });
  }

  update(id: number, UpdateVisitorsDto: UpdateVisitorsDto) {
    return this.prisma.visitors.update({
      where: {
        id_visitors: id,
      },
      data: UpdateVisitorsDto,
    });
  }

  remove(id: number) {
    return this.prisma.visitors.delete({
      where: {
        id_visitors: id,
      },
    });
  }
}


