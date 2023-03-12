import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseHeadersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ResponseHeadersMiddleware');
    res.setHeader("app","my-shop")
    next();
  }
}
