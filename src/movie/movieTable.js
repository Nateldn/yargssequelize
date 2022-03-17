const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
});

module.exports = Movie;
