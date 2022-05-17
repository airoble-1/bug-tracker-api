const db = require("../database/database");
const Sequelize = require("sequelize");

const User = db.define("User", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
