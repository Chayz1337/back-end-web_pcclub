import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateAdminsDto {
    
    @IsString()
    full_name: string;

    @IsString()
    telephone: string;

    email:string;

    visitid:number[];

}