const mongoose = require("mongoose");
// list Schema
const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 400,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create Our Model
const list = mongoose.model("list", listSchema);

// Export Model
module.exports = list;
