import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { PrismaService } from 'src/pclub/prisma/prisma.service';

@Injectable()
export class AdminsService {
  [x: string]: any;
  constructor(private prisma: PrismaService) {}
  

  async create(CreateAdminsDto: CreateAdminsDto) {
    return await this.prisma.admins.create({
      data: {...CreateAdminsDto},
    });
  }

  findAll() {
    return this.prisma.admins.findMany();
  }

  findOne(id: number) {
    return this.prisma.admins.findUniqueOrThrow({
      where: {
        id_admins: id,
      },
    });
  }

  update(id: number, UpdateAdminsDto: UpdateAdminsDto) {
    return this.prisma.admins.update({
      where: {
        id_admins: id,
      },
      data: UpdateAdminsDto,
    });
  }

  remove(id: number) {
    return this.prisma.admins.delete({
      where: {
        id_admins: id,
      },
    });
  }
}