import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import mongoose, { mongo } from 'mongoose';

@Controller('users')
export class UserController {
    
    constructor(private userService: UserService){

    }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }
 

    @Get() 
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('User not found', 404)
        const findUser = await this.userService.getUserById(id);
        if (!findUser) throw new HttpException('User not found', 404)
            return findUser;
    }
}
 