const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        error: {
          message: "Not Authorized",
        },
      });
    }
    const jwtToken = req.headers.authorization.split("Bearer ")[1];
    if (!jwtToken) {
      return res.status(401).json({
        error: {
          message: "Not Authorized",
        },
      });
    }
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({
      error: {
        message: "Not Authorized",
      },
    });
  }
};
