import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsString() @IsNotEmpty()
    firstname: string;

    @IsString() @IsNotEmpty()
    lastname: string;

    @IsEmail() @IsNotEmpty()
    email: string;

    @IsString()
    phoneNumber: string;

    @IsNotEmpty() @IsStrongPassword()
    password: string;

}  