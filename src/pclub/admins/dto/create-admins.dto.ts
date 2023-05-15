import {IsEmail, IsString } from 'class-validator';

export class CreateAdminsDto {
    
    @IsString()
    full_name: string;

    @IsString()
    telephone: string;

    @IsEmail()
    email:string;
}