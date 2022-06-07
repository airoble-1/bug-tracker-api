const db = require("../database/database");
const Sequelize = require("sequelize");

const User = db.define("User", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  role: {
    type: Sequelize.STRING,
    enum: ["submitter", "developer", "project_manager", "admin"],
    defaultValue: "submitter",
  },
});

module.exports = User;
