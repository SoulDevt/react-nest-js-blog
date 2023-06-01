import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    getUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }
    getSingleUser(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }
    postUser(createUserDto: CreateUserDto) {
        return this.usersRepository.save(createUserDto);
    }
    async deleteUser(id: {id: number}) {
        await this.usersRepository.delete(id);
    }
    editUser(updateUserDto: UpdateUserDto, param: {id: number}) {
        return this.usersRepository.update(param, updateUserDto);
    }
}
