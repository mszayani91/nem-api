const Nem = require("../model/Nem");

const getNems = (req,res) => {
   Nem.find((err, nems) => {
       if(err) {
           res.send(err);
       }
       res.json(nems);
   });
};

const addNem = (req, res) => {
    const nem = new Nem({
        title: req.body.title,
        description: req.body.description,
        spicy: req.body.spicy,
    });

    nem.save((err, nem) => {
        if(err) {
            res.send(err);
        }
        res.json(nem);
    });
};

const deleteNem = (req, res) => {
    Nem.deleteOne({ _id: req.params.nemID })
      .then(() => res.json({ message: "Nem Deleted" }))
      .catch((err) => res.send(err));
  };

  const updateNem = (req, res) => {
    Nem.findOneAndUpdate(
      { _id: req.params.nemID },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          spicy: req.body.spicy,
        },
      },
      { new: true },
      (err, Nem) => {
        if (err) {
          res.send(err);
        } else res.json(Nem);
      }
    );
  };
  
module.exports = {
    getNems,addNem,deleteNem, updateNem
};