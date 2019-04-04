const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const Entry = sequelize.define('entry', {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    views: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {});
  return Entry;
}
