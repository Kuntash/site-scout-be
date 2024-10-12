import { sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { usersTable } from '../../authentication/models/user.schema';

export const competitorTable = pgTable('competitor_table', {
  id: uuid('id')
    .default(sql`uuid_generate_v4()`)
    .primaryKey(),
  name: varchar('name').notNull(),
  lastCrawled: timestamp('last_crawled').defaultNow().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id),
});

export type InsertCompetitor = typeof competitorTable.$inferInsert;
