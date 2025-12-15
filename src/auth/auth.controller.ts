import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { Roles } from './roles.decorator';

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  @Get('logined')
  isLogined(@Req() request: Request) {
    console.log(request.headers['token']);
    return 'sdfsdf';
  }

  @Get('admin')
  @Roles(['admin'])
  rolesCheck() {
    return { roles: 'admin' };
  }

  @Get('user')
  anyCheck() {
    return { roles: 'user' };
  }
}
