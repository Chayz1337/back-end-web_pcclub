import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import internal from 'stream';

export class CreateVisitorsDto {
    

    @IsDate()
    @Type(() => Date)
    birthday: Date;

    @IsString()
    full_name: string;

    @IsString()
    constancy: string;

}