import { Module } from '@nestjs/common';
import { PrismaService } from 'src/pclub/prisma/prisma.service';
import { HallsController } from './halls.controller';
import { HallsService } from './halls.service';

@Module({
controllers: [HallsController],
  providers: [HallsService, PrismaService]
})

export class HallsModule {}
