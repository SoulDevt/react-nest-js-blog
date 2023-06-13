import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
      ){}

    async signIn(loginDto: any): Promise<any> {
        const user = await this.usersService.findByEmail(loginDto.email);
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        
         if (!isMatch) {
           throw new UnauthorizedException("Invalid credentials");
         }
         const payload = { sub: user.id, username: user.name, email: user.email };
         return {
           access_token: await this.jwtService.signAsync(payload),
         };
        
      }

    async register(registerDto: any): Promise<any> {
      const saltOrRounds = 10;
      const user = await this.usersService.findByEmail(registerDto.email);
      if (user?.email === registerDto.email) {
        throw new UnauthorizedException("This email already exist");
      }

      const hash = await bcrypt.hash(registerDto.password, saltOrRounds);
      registerDto.password = hash;
      
      return this.usersService.postUser(registerDto);

    }
}
