import dotenv from 'dotenv';
import { Knex } from 'knex';
import path from 'path';

dotenv.config({ path: '../../../.env' });

const connection = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    charset: 'utf8'
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, 'migrations')
  }
} as Knex.Config;

export default connection;
