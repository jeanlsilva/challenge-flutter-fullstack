import { ConnectionOptions } from 'typeorm';
import Category from './models/Category';
import Product from './models/Product';
import User from './models/User';

console.log(`database: ${process.env.PG_DATABASE}`);

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Category, Product],
  subscribers: [],
  migrations: ['src/database/migrations/**/*.ts'],
};

export default config;
