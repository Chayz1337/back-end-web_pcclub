import { Module } from '@nestjs/common';
import { PrismaService } from 'src/pclub/prisma/prisma.service';
import { ComputersController } from './computers.controller';
import { ComputersService } from './computers.service';

@Module({
controllers: [ComputersController],
  providers: [ComputersService, PrismaService]
})

export class ComputersModule {}
