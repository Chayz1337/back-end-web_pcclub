import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateVisitorsDto {
    
    @Type(()=> Date)
    @IsDate()
    birhday: Date;

    @IsString()
    full_name: string;
    
    constancy:string;


    id_visitors:number[];

}