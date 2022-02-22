const { getNems, addNem, updateNem, deleteNem } = require("../controller/NemController");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's discover all the nems recipes!");
});

//List of nems route
router.get("/nems", getNems);

//Adding new nem 
router.post("/nem", addNem);
router.put("/nems/:nemID", updateNem);
router.delete("/nems/:nemID", deleteNem);
module.exports = router;
