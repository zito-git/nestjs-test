import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserDto } from './dto/user-dto/user-dto';
import { UsersService } from './users.service';
import { InterceptorInterceptor } from 'src/interceptor/interceptor.interceptor';

@UseInterceptors(InterceptorInterceptor)
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('insert')
  insertUser(@Body() userDto: UserDto) {
    this.userService.insert(userDto);
    return 'insert 완료';
  }

  @Get('finduser')
  findOne() {
    return this.userService.findOne();
  }

  @Get('findUsers')
  findAll() {
    return this.userService.findAll();
  }
}
