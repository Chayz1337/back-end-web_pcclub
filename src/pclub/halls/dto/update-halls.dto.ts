import { PartialType } from '@nestjs/mapped-types';
import { CreateHallsDto } from './create-halls.dto';

export class UpdateHallsDto extends PartialType(CreateHallsDto) {}