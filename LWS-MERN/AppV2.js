const mongoose = require("mongoose");

const shelf1 = new mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  useFor: String,
});
