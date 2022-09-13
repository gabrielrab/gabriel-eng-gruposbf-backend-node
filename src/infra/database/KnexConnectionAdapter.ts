import { knex } from 'knex';
import knexConnection from './knex';

const database = knex(knexConnection);

(async () => {
  try {
    await database.raw('SELECT 1');
    console.log('🔥 Successfully created connection with database 🔥');
  } catch (error) {
    console.log('🚨 Cannot connect database 🚨');
    process.exit(1);
  }
})();

export default database;
