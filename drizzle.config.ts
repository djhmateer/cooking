import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

// Used by Drizzle Kit
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING!,
  },
});
