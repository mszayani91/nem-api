const { getNems } = require("../controller/NemController");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's discover all the nems recipes!");
});

//List of nems route
router.get("/nems", getNems);

module.exports = router;
