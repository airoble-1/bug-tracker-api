const router = require("express").Router();

const loginRouter = require("./login");
const registerRouter = require("./register");

router.use(loginRouter);
router.use(registerRouter);

module.exports = router;
