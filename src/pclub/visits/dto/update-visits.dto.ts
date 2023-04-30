import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitsDto } from './create-visits.dto';

export class UpdateVisitsDto extends PartialType(CreateVisitsDto) {}