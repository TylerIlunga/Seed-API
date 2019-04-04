module.exports = {
  dbConfig: {
    user: 'admin',
    host: '127.0.0.1',
    password: null,
    database: process.env.DBNAME,
    port: 5432,
    pool: {
      max: 20,
      min: 1,
      idle: 10000,
    },
    dialect: 'postgres',
  },
  poolConfig: {
    user: 'admin',
    host: '127.0.0.1',
    password: null,
    database: process.env.DBNAME,
    port: 5432,
    max: 20,
  },
  port: process.env.PORT || 4444,
};
