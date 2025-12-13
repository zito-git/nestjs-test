import { Module } from '@nestjs/common';
import { PipeTestController } from './pipe-test.controller';

@Module({
  controllers: [PipeTestController],
})
export class PipeTestModule {}
