const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's discover all the nems recipes!");
});

module.exports = router;
