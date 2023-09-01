
const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingappointment', 'root', 'Lakki@6625', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
