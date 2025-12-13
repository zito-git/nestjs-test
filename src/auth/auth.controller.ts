import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@UseGuards(new AuthGuard())
@Controller('auth')
export class AuthController {
  @Get('logined')
  isLogined(@Req() request: Request) {
    console.log(request.headers['token']);
    return 'sdfsdf';
  }
}
