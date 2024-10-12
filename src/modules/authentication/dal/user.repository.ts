import { eq } from 'drizzle-orm';
import { db } from '../../../db';
import { InsertUser, usersTable } from '../models';

class UserRepository {
  async createUser(data: InsertUser) {
    const createdUser = await db.insert(usersTable).values(data).returning();
    const { password, ...createdUserWithoutPasswordField } = createdUser[0];
    return createdUserWithoutPasswordField;
  }

  async getUserByEmail(email: string) {
    return await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
  }

  async getUserById(id: string) {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id));
    const { password, ...userWithoutPassword } = user ?? {};
    return userWithoutPassword;
  }
}

export default UserRepository;
