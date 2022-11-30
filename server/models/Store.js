const { Schema, model } = require("mongoose");

const storeSchema = new Schema({
  storeName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  potions: [
    {
      type: String,
    },
  ],
  ingredients: [
    {
      type: String,
    },
  ],
  goldCount: {
    type: Number,
  },
});

const Store = model("Store", storeSchema);

module.exports = Store;
