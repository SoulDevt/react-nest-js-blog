import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';


@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService
      ){}

    async signIn(loginDto: any, response : Response): Promise<any> {
        const user = await this.usersService.findByEmail(loginDto.email);
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        
         if (!isMatch) {
           throw new UnauthorizedException("Invalid credentials");
         }
         const payload = { id: user.id, username: user.name, email: user.email };
         const jwt = await this.jwtService.signAsync(payload)
        response.cookie('jwt', jwt, {httpOnly: true});
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

    // async getProfile(req: Request): Promise<any> {
    //   try {
    //     const cookie = req.cookies['jwt'];
    //     const cookieDecode =  await this.jwtService.verifyAsync(cookie);

    //     if(!cookieDecode) {
    //       throw new UnauthorizedException;
    //     }
    //     const user = await this.usersService.getSingleUser(cookieDecode['id'])
    //     return user;
        
    //   } catch (error) {
    //     throw new UnauthorizedException();
    //   }

      
    // }

    async getProfile(req: Request): Promise<any> {
      try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
          throw new UnauthorizedException();
        }
    
        const token = authorizationHeader.split(' ')[1];
        const decoded = await this.jwtService.verifyAsync(token);
        if (!decoded) {
          throw new UnauthorizedException();
        }
    
        const user = await this.usersService.getSingleUser(decoded.id);
        const {password, ...userData} = user;
        return userData;
        
      } catch (error) {
        throw new UnauthorizedException();
      }
    }
    
}
