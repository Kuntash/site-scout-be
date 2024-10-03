import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { InsertUser } from '../models';
import { AuthJWTPayload, LoginUserPayload } from '../entities/user.entity';
import jwt from 'jsonwebtoken';

class UserController {
  async signUpUser(req: Request, res: Response) {
    const userService = new UserService();
    const payload = req?.body as InsertUser;

    try {
      if (req?.userId) {
        return res.status(200).json({ message: 'User already logged in' });
      }

      if (!payload?.email) {
        return res.status(400).json({ message: 'Email is required' });
      }

      if (!payload?.password) {
        return res.status(400).json({ message: 'Password is required' });
      }

      if (!payload?.firstName) {
        return res.status(400).json({ message: 'First name is required' });
      }

      const createdUser = await userService.createUser(req.body as Omit<InsertUser, 'id'>);
      return res.status(201).json({ message: 'User successfully created', data: createdUser });
    } catch (error) {
      console.error('Error creating user', error);
      return res.status(400).json({ message: 'Error creating user' });
    }
  }

  async loginUser(req: Request, res: Response) {
    const userService = new UserService();

    const payload = req.body as LoginUserPayload;
    try {
      console.log('req.userId', req.userId);
      /* If user is already authenticated, return the user */
      if (req?.userId) {
        return res.status(200).json({ message: 'User already logged in' });
      }

      if (!payload?.email) {
        return res.status(400).json({ message: 'Email is required' });
      }

      if (!payload?.password) {
        return res.status(400).json({ message: 'Password is required' });
      }

      /* check if user exists and is authenticated */
      const user = await userService.loginUser(payload);

      if (!user?.id) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      /* generate jwt token */
      const jwtPayload: AuthJWTPayload = {
        userId: user?.id,
      };
      const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, { expiresIn: process.env.JWT_EXPIRY });

      /* set http cookie */
      res.cookie(process.env.JWT_TOKEN_NAME as string, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: Number(process.env.AUTH_TOKEN_COOKIE_EXPIRY),
      });

      return res.status(200).json({ message: 'User successfully logged in', data: user });
    } catch (error) {
      console.error('Error logging in user', error);
      return res.status(400).json({ message: 'Error logging in user' });
    }
  }
}

export default UserController;
