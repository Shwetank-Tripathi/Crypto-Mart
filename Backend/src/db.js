import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

// Create a Sequelize instance using the Supabase DATABASE_URL
export const db = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: () => {}, // ✅ Enables query logging with prefix
});
