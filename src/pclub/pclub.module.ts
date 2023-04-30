import { Module } from '@nestjs/common';
import { PclubController } from './pclub.controller';
import { PclubService } from './pclub.service';
import { ServicesController } from './services/services.controller';
import { ServicesModule } from './services/services.module';
import { VisitorsController } from './visitors/visitors.controller';
import { VisitorsModule } from './visitors/visitors.module';
import { VisitsController } from './visits/visits.controller';
import { VisitsModule } from './visits/visits.module';

@Module({
  controllers: [PclubController, ServicesController, VisitorsController, VisitsController],
  providers: [PclubService],
  imports: [ServicesModule, VisitorsModule, VisitsModule]
})
export class PclubModule {}
