import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async signIn(loginDto: any): Promise<any> {
        const user = await this.usersService.findByEmail(loginDto.email);
        if (user?.password !== loginDto.password) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return result;
      }
}
