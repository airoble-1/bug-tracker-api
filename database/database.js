require("dotenv").config();
const { dbName, dbUser, dbPassword, dbHost } = process.env;
const { Sequelize } = require("sequelize");
// sequelize to connect to the postgres database on Heroku
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
  define: {
    freezeTableName: true,
  },
  query: { raw: true },
  logging: false,
});

module.exports = sequelize;
