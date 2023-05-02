import { Injectable } from '@nestjs/common';
import { CreateHallsDto } from './dto/create-halls.dto';
import { UpdateHallsDto } from './dto/update-halls.dto';
import { PrismaService } from 'src/pclub/prisma/prisma.service';

@Injectable()
export class HallsService {
  constructor(private prisma: PrismaService) {}

  async create(CreateHallsDto: CreateHallsDto) {
    return await this.prisma.halls.create({
      data: {...CreateHallsDto},
    });
  }

  findAll() {
    return this.prisma.halls.findMany();
  }

  findOne(id: number) {
    return this.prisma.halls.findUniqueOrThrow({
      where: {
        id_halls: id,
      },
    });
  }

  update(id: number, UpdateHallsDto: UpdateHallsDto) {
    return this.prisma.halls.update({
      where: {
        id_halls: id,
      },
      data: UpdateHallsDto,
    });
  }

  remove(id: number) {
    return this.prisma.halls.delete({
      where: {
        id_halls: id,
      },
    });
  }
}

