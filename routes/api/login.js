const { loginController } = require("../../controllers/loginController");
const router = require("express").Router();

router.route("/login").post(loginController);

module.exports = router;
