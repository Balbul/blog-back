import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('METHODE:', req.method);
    console.log('ROUTE:', req.params[0]);
    if (req.method === 'POST') {
      if (req.body) {
        console.log('BODY:', req.body);
      }
    }
    next();
  }
}
