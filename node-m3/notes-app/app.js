const request = require("request");
const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("This is Homepage");
});

app.get("/about", (req, res) => {
  res.send("This is all about us :D");
});

app.listen(1111, () => {
  console.log("App is up and runnig");
});
