import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){};

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    login(@Body() loginDto: any, @Res({passthrough: true}) response: Response) {
        return this.authService.signIn(loginDto, response)
    }

    // @UseGuards(AuthGuard)
    @Get('/profile')
    getProfile(@Req() req: Request) {
      return this.authService.getProfile(req)
    }

    @Post('/register')
    register(@Body() registerDto: any) {
      return this.authService.register(registerDto)
    }
    
}
