import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger, LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { PipeTestController } from './pipe-test/pipe-test.controller';
@Module({
  imports: [UsersModule],
  controllers: [AppController, PipeTestController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*');
  }
}
