import { eq } from 'drizzle-orm';
import { db } from '../../../db';
import { InsertCompetitor, competitorTable } from '../models';

class CompetitorRepository {
  async createCompetitor(data: InsertCompetitor) {
    const createdCompetitor = await db.insert(competitorTable).values(data).returning();
    return createdCompetitor[0];
  }

  async getCompetitorsByUserId(userId: string) {
    return await db.select().from(competitorTable).where(eq(competitorTable.userId, userId));
  }

  async getCompetitorById(id: string) {
    return await db.select().from(competitorTable).where(eq(competitorTable.id, id)).limit(1);
  }
}

export default CompetitorRepository;
