import { Injectable } from '@nestjs/common';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { PrismaService } from 'src/pclub/prisma/prisma.service';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) {}

  create(createAdminsDto: CreateAdminsDto) {
    return this.prisma.admins.create({
      data: createAdminsDto,
    });
  }

  findAll() {
    return this.prisma.buyer.findMany();
  }

  findOne(id: number) {
    return this.prisma.admins.findUniqueOrThrow({
      where: {
        idadmins: id,
      },
    });
  }

  update(id: number, updateBuyerDto: UpdateAdminsDto) {
    return this.prisma.admins.update({
      where: {
        idadmins: id,
      },
      data: UpdateAdminsDto,
    });
  }

  remove(id: number) {
    return this.prisma.admins.delete({
      where: {
        idadmins: id,
      },
    });
  }
}