// db/migrate.ts

// npx drizzle-kit generate 
// seems like npx drizzle-kit migrate does the same

import { db } from './index';
// import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: 'db/migrations' });
        console.log('Migrations completed successfully');
    } catch (error) {
        console.error('Error migrating:', error);
    }

    process.exit(1);
}

main();