import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './pclub/admins/admins.module';
import { ComputersModule } from './pclub/computers/computers/computers.module';
import { HallsModule } from './pclub/halls/halls.module';
import { PclubModule } from './pclub/pclub.module';
import { PrismaService } from './pclub/prisma/prisma.service';
import { ServicesModule } from './pclub/services/services.module';
import { VisitorsModule } from './pclub/visitors/visitors.module';
import { VisitsModule } from './pclub/visits/visits.module';

@Module({
  imports: [AdminsModule, ComputersModule, HallsModule, ServicesModule, VisitorsModule, VisitsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
