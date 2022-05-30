const router = require("express").Router();

router.route("/protected").get(async (req, res) => {
  try {
    res.json({
      data: {
        message: "Private route.",
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: {
        message: err.message,
      },
    });
  }
});

module.exports = router;
