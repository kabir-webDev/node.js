const express = require("express");

const app = express();

const trigger = app.get("/", (req, res) => {
  console.log("This is homepage");
});

module.exports = trigger;
