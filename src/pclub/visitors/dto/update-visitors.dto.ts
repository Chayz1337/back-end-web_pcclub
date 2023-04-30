import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitorsDto } from './create-visitors.dto';

export class UpdateVisitorsDto extends PartialType(CreateVisitorsDto) {}