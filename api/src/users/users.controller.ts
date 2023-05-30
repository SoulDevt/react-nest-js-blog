import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){};
    @Get()
    getUsers(@Req() req: Request) {
        return this.usersService.getUsers();
    }
    @Get("/:id")
    getSingleUser(@Param('id', ParseIntPipe) param: number){
        return this.usersService.getSingleUser(param);
    }
    @Post()
    postUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.postUser(createUserDto);
    }
    @Delete("/:id")
    deleteUser(@Param('id', ParseIntPipe) param: {id: number}){
        return this.usersService.deleteUser(param);
    }
    @Patch("/:id")
    editUser(@Body() updateUserDto: UpdateUserDto ,@Param('id', ParseIntPipe) param: {id: number}) {
        return this.usersService.editUser(updateUserDto, param);
    }
}
