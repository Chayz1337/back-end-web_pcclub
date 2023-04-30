import { Module } from '@nestjs/common';
import { HallsService } from './halls.service';

@Module({
  providers: [HallsService]
})
export class HallsModule {}
