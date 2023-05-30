import { IsEmail, IsNotEmpty, IsString, isEmail } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    name: string

    @IsEmail()
    email: string
}