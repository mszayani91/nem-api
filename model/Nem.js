const mongoose = require("mongoose");

    const NemSchema = new mongoose.Schema({
        
       title: {
            type: String,
            required: true,
       },
       description: {
           type: String,
           required: true,
       },
       addedAt: {
           type: Date,
           default: Date.now,
       },
    });

    module.exports = mongoose.model("Nem", NemSchema);