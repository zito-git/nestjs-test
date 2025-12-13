import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { logger } from './middleware/logger.middleware';
import { PipeTestModule } from './pipe-test/PipeTest.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [UsersModule, AuthModule, PipeTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*');
  }
}
