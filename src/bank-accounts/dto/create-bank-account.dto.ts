import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateBankAccountDto {
 
    id!: number;

    type!: string;

    @IsString()
    holderName!: string;

    @IsEmail()
    holderEmail!: string;

}
