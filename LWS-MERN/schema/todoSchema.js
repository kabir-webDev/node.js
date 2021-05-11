const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    requird: true,
  },
  desc: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = todoSchema;
