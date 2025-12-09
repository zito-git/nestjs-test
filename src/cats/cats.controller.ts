import { Controller, Get, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('find01')
  findTest01(@Query('name') name: string, @Query('bool') count: string) {
    return { name, count };
  }
}
