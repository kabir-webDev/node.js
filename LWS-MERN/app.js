const express = require("express");
const app = express();

const PORT = 1111;

app.get("/", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
});

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
