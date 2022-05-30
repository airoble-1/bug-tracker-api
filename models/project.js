const db = require("../database/database");
const Sequelize = require("sequelize");

const Project = db.define("Project", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  github: Sequelize.STRING,
  site: Sequelize.STRING,
});

module.exports = Project;
