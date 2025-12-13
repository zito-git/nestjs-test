import { Injectable } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware {
  use(req, res, next) {
    console.log('Request...');
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('function Reqeust....');
  // console.log(req.headers);
  next();
}
