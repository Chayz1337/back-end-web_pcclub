import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateVisitsDto {

    @Type(()=> Date)
    @IsDate()
    data: Date;

    @IsString()     
    computer: number;

    time:number;

    adminsid:number;

    @IsString()
    name: string;

    id_visits:number[];

    visitors_id_visitors:number[];

    admins_id_admins:number[];

    computers_id_computers:number[];

    service_id_service:number[];

}