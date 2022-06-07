const router = require("express").Router();

const protectedRouter = require("./protected");
const projectRouter = require("./project");

router.use(protectedRouter);
router.use("/project", projectRouter);
module.exports = router;
