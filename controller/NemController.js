const Nem = require("../model/Nem");

const getNems = (req,res) => {
    res.send("List of Nems available");
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

module.exports = {
    getNems,addNem
};