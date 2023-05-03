import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class VisitsDto {

    @Type(()=> Date)
    @IsDate()
    data: Date;

    @IsNumber()
    computer: number;

    @IsNumber()
    adminsid: number;

    @IsNumber()
    computersid: number;

}