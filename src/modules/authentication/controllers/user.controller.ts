import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { InsertUser } from '../models';

class UserController {
  async createUser(req: Request, res: Response) {
    const userService = new UserService();

    const payload = req?.body as InsertUser;
    try {
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
}

export default UserController;
