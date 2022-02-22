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
       spicy: {
        type: Boolean,
        default: false,
      },
       addedAt: {
           type: Date,
           default: Date.now,
       },
    });

    module.exports = mongoose.model("Nem", NemSchema);