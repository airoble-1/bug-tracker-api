const router = require("express").Router();
const routers = require("./api");
router.use("/api", routers);

module.exports = router;
