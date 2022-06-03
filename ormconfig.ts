console.log('process.env.DATABASE.URL :>> ', process.env.DATABASE_URL);

const config = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['/dist/models/**/*.js'],
  migrations: ['/dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: '/src/database/migrations ',
    entitiesDir: '/src/models',
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

module.exports = config;
