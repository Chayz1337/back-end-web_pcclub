import { PartialType } from '@nestjs/mapped-types';
import { CreateComputersDto } from './create-computers.dto';

export class UpdateComputersDto extends PartialType(CreateComputersDto) {}
