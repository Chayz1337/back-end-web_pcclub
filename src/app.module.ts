import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './pclub/admins/admins.module';
import { PclubModule } from './pclub/pclub.module';
import { PrismaService } from './pclub/prisma/prisma.service';

@Module({
  imports: [AdminsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
