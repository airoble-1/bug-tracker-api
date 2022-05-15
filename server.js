require("dotenv").config();

const express = require("express");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

const cors = require("cors");
app.use(cors()); // allow Cross-domain requests
app.use(express.json()); // Access req.body in JSON format

app.get("/", (req, res) => {
  res.json("Hello World!");
});

const initialize = async () => {
  try {
    app.listen(HTTP_PORT, () => {
      console.log(`Express http server listening on ${HTTP_PORT}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

initialize();
