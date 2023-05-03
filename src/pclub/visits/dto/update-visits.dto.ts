import { PartialType } from '@nestjs/mapped-types';
import { VisitsDto } from './create-visits.dto';

export class UpdateVisitsDto extends PartialType(VisitsDto) {}