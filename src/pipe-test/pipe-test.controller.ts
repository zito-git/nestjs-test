import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

export class PipeDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

// @UseFilters(HttpExceptionFilter)
@Controller('pipe-test')
export class PipeTestController {
  @Get('parseInt')
  parseInt(@Query('id', ParseIntPipe) id: number) {
    return { id, type: typeof id };
  }

  @Post('dtoTest')
  dtoTest(@Body() pipeDto: PipeDto) {
    return pipeDto;
  }
}
