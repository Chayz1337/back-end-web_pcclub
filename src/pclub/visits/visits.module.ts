import { Module } from '@nestjs/common';
import { PrismaService } from 'src/pclub/prisma/prisma.service';
import { VisitsController } from './visits.controller';
import { VisitsService } from './visits.service';

@Module({
controllers: [VisitsController],
  providers: [VisitsService, PrismaService]
})

export class VisitsModule {}
