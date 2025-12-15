import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    console.log(`before -> ${now}`);

    return next.handle().pipe(
      tap(() => {
        console.log(`process -> ${Date.now() - now}`);
        console.log(`after ->${Date.now()}`);
      }),
    );
  }
}
