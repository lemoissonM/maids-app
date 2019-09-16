import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const dbName = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'DB_DEV';
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env[dbName],
  password: process.env.pass,
  port: process.env.port,
});

export default pool;
