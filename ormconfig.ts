import Category from './src/models/Category';
import Product from './src/models/Product';
import User from './src/models/User';

console.log(`database: ${process.env.PG_DATABASE}`);

module.exports = {
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
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
