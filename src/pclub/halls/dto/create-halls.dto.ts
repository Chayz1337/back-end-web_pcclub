import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateHallsDto {
    
    name:string;

    id_halls:number[];

}