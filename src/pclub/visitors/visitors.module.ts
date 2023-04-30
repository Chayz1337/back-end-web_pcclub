import { Module } from '@nestjs/common';
import { VisitorsService } from './visitors.service';

@Module({
  providers: [VisitorsService]
})
export class VisitorsModule {}
