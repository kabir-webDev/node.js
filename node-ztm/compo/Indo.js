const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("This is homepage");
});
