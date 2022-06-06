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
  entities: ['dist/models/**/*.js'],
  subscribers: [],
  migrations: ['dist/database/migrations/**/*.js'],
  cli:{
    migrationsDir: [
      "src/database/migrations/"
    ],
    entitiesDir: "src/models"
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
