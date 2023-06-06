import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){};
    @Post('/login')
    login(@Body() loginDto: any) {
        return this.authService.signIn(loginDto)
    }
    
}
