import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateTaskDto {

    @IsString() @IsNotEmpty()
    title: string;

    @IsString() @IsOptional()
    description?: string;

    completed: boolean;

    @IsString()
    due_Date: string;

    @IsNotEmpty()
    userId: Object;

}  