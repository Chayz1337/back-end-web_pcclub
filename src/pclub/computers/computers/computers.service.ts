import { Injectable } from '@nestjs/common';
import { CreateComputersDto } from './dto/create-computers.dto';
import { UpdateComputersDto } from './dto/update-computers.dto';
import { PrismaService } from 'src/pclub/prisma/prisma.service';

@Injectable()
export class ComputersService {
  constructor(private prisma: PrismaService) {}

  async create(CreateComputersDto: CreateComputersDto) {
    return await this.prisma.computers.create({
      data: {...CreateComputersDto},
    });
  }

  findAll() {
    return this.prisma.computers.findMany();
  }

  findOne(id: number) {
    return this.prisma.computers.findUniqueOrThrow({
      where: {
        id_computers: id,
      },
    });
  }

  update(id: number, UpdateComputersDto: UpdateComputersDto) {
    return this.prisma.computers.update({
      where: {
        id_computers: id,
      },
      data: UpdateComputersDto,
    });
  }

  remove(id: number) {
    return this.prisma.computers.delete({
      where: {
        id_computers: id,
      },
    });
  }
}
