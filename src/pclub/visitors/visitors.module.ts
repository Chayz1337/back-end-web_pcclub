import { Module } from '@nestjs/common';
import { PrismaService } from 'src/pclub/prisma/prisma.service';
import { VisitorsController } from './visitors.controller';
import { VisitorsService } from './visitors.service';

@Module({
controllers: [VisitorsController],
  providers: [VisitorsService, PrismaService]
})

export class VisitorsModule {}

