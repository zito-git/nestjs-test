import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { BodyTestDto } from './dto/body-test-dto/body-test-dto';

@Controller('users')
export class UsersController {
  @Get()
  findUser(): string {
    return 'find user page';
  }

  @Get('req-headers')
  reqTest(@Req() req: Request) {
    console.log(req);
    return req.headers;
  }

  @Get('query-test')
  queryTest(@Query('name') name: string, @Query('age') age: string) {
    return { name, age };
  }

  @Get('param-test/:id/name/:name/age/:age')
  paramTest(@Param() params) {
    return params;
  }

  @Post('body-test')
  @HttpCode(200)
  bodyTest(@Body() bodyTestDto: BodyTestDto) {
    return bodyTestDto;
  }
}
