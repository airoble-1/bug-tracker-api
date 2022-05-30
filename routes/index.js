const router = require("express").Router();
const routers = require("./api");
const verifyToken = require("../middleware/verifyToken");

router.use("/api", verifyToken, routers);

module.exports = router;
