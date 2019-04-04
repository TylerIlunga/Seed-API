const Sequelize = require('sequelize');
const { dbConfig } = require('../config');
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
  },
);

const models = {
  Entry: require('./models/Entry')(sequelize),
};

Object.keys(models).forEach(model => {
  console.log(`Model: ${model}`);
});

sequelize
  .sync()
  .then(async () => {
    console.log('connected to PGDB'); // NOTE: comment out when testing
  })
  .catch(error => {
    console.error(`sequelize sync error: ${error}`);
  });

module.exports = {
  ...models,
  getClient: () => sequelize,
};
