import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){};

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    login(@Body() loginDto: any) {
        return this.authService.signIn(loginDto)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    @Post('/register')
    register(@Body() registerDto: any) {
      return this.authService.register(registerDto)
    }
    
}
