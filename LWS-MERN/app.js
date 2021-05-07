const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./conn");

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("Middleware Checking");
  next();
};

app.get("/", (req, res) => {
  res.send("In the langs In the baga buga");
});

app.get("/about", middleware, (req, res) => {
  res.send("This is About Page");
});

app.listen(PORT, () => {
  console.log(`Up and running at ${PORT}`);
});
