import { IsDate, IsEmail, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateAdminsDto {
    
    @IsString()
    full_name: string;

    @IsString()
    telephone: string;

    @IsEmail()
    email:string;
}