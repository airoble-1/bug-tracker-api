const { registerController } = require("../../controllers/registerController");

const router = require("express").Router();

router.route("/register").post(registerController);
module.exports = router;
