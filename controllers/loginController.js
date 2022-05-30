const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

module.exports.loginController = async (req, res) => {
  try {
    res.status(500);
    const { email, password } = req.body;
    const dbUser = await User.findOne({ where: { email } });
    if (!dbUser) {
      res.status(401);
      throw new Error("email or password is incorrect");
    }
    const isPasswordValid = await bcrypt.compare(password, dbUser.password);
    if (!isPasswordValid) {
      res.status(401);
      throw new Error("email or password is incorrect");
    }
    res.status(200).json({
      token: jwtGenerator(dbUser.id),
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
