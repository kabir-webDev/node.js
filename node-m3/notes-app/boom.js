const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("MERN is Awesome...");
});

app.listen(2000, () => {
  console.log("Server is Running Bro!!");
});
