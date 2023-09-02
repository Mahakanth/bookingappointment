const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'Lakki@6625', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
