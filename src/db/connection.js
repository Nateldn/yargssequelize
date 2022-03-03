require ("dotenv").config();
const { Sequelize } = require ("sequelize");  // Sequelize class is class constructor 

exports.sequelize = new Sequelize(process.env.MYSQL_URI); // This variable stores the connnection to the database
