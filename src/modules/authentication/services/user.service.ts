import UserRepository from '../dal/user.repository';
import { InsertUser } from '../models';
import bcrypt from 'bcrypt';

class UserService {
  async createUser(data: InsertUser) {
    const { email, password } = data;
    const userRepository = new UserRepository();

    try {
      /* Check if user already exists */
      const existingUser = await userRepository.getUserByEmail(email);

      console.log('existingUser', existingUser);

      if (existingUser && existingUser?.length > 1) {
        throw new Error('User already exists');
      }

      /* salt and hash password */
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const createdUser = await userRepository.createUser({ ...data, password: hashedPassword });
      return createdUser;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
