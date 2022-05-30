const router = require("express").Router();

const protectedRouter = require("./protected");

router.use(protectedRouter);

module.exports = router;
