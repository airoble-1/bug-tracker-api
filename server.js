require("dotenv").config();

const HTTP_PORT = process.env.PORT || 8080;

const sequelize = require("./database/database");

const cors = require("cors");
const express = require("express");
const app = express();

const router = require("./routes");

app.use(cors()); // allow Cross-domain requests
app.use(express.json()); // Access req.body in JSON format

app.use(router);

const initialize = async () => {
  try {
    await sequelize.sync();
    console.log("Database Connected successfully!");
    app.listen(HTTP_PORT, () => {
      console.log(`Express http server listening on ${HTTP_PORT}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

initialize();
