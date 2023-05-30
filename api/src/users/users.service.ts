import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    getUsers() {
        return {id : 1, name: 'John', email: 'john@gmail.com'}
    }
    getSingleUser(param: number) {
        return param;
    }
    postUser(createUserDto: CreateUserDto) {
        return createUserDto;
    }
    deleteUser(param: {id: number}) {
        return {param};
    }
    editUser(updateUserDto: UpdateUserDto, param: {id: number}) {
        return {body: updateUserDto, param};
    }
}
