import { Injectable } from '@nestjs/common';
import { CreateServicesDto } from './dto/create-services.dto';
import { UpdateServicesDto } from './dto/update-services.dto';
import { PrismaService } from 'src/pclub/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(CreateServicesDto: CreateServicesDto) {
    return await this.prisma.services.create({
      data: {...CreateServicesDto},
    });
  }

  findAll() {
    return this.prisma.services.findMany();
  }

  findOne(id: number) {
    return this.prisma.services.findUniqueOrThrow({
      where: {
        id_service: id,
      },
    });
  }

  update(id: number, UpdateServicesDto: UpdateServicesDto) {
    return this.prisma.services.update({
      where: {
        id_service: id,
      },
      data: UpdateServicesDto,
    });
  }

  remove(id: number) {
    return this.prisma.services.delete({
      where: {
        id_service: id,
      },
    });
  }
}


