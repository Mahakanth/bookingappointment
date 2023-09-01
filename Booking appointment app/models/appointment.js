const Sequelize = require('sequelize');
const sequelize = require('../db');

const Appointment = sequelize.define('appointment', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },  
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Validate that the email is in a valid format
    },
  },
});

module.exports = Appointment;
