import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateComputersDto {
    
    @IsString()
    specifications: string;

    @Type(()=> Date)
    @IsDate()
    date_of_last_service: Date;

    @IsNumber()
    halls_id_halls: number;

}