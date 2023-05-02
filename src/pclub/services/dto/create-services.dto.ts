import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateServicesDto {
    
    @IsNumber()
    price_on_hour: number;

    @IsString()
    name: string;

}