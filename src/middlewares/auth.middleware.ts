import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AuthJWTPayload } from '../modules/authentication/entities/user.entity';

/* Extend the Request interface */

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

class AuthMiddleware {
  isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.[process.env.JWT_TOKEN_NAME as string];

    if (!token) {
      return res.status(401).json({ message: 'No token provided, authentication required' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as AuthJWTPayload;
      req.userId = decoded.userId;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  }

  checkLoginStatus(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.[process.env.JWT_TOKEN_NAME as string];

    console.log('token', token);
    if (!token) {
      return next();
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as AuthJWTPayload;
      req.userId = decoded.userId;
      next();
    } catch (error) {
      return next();
    }
  }
}

export default AuthMiddleware;
