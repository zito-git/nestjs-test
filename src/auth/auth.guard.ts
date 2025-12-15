import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from './roles.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log(roles);

    if (!roles) {
      return true;
    }
    const req = context.switchToHttp().getRequest();

    const result: boolean = matchRoles(roles, req.headers['token']);

    return result;
  }
}

function matchRoles(rolesArr: string[], tokenLevel: string) {
  return rolesArr.some((role) => rolesArr.includes(tokenLevel));
}
