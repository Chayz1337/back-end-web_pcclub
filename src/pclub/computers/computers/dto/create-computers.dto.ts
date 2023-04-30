import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateComputersDto {
    
    @IsString()
    id_computers:number;
    @IsString()
    specifications: string;

    @Type(()=> Date)
    @IsDate()
    date_of_last_service: Date;

    halls_id_halls:number[];

}