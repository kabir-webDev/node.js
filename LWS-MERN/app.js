const express = require("express");
const app = express();
const PORT = 1111;

const myMiddle = (req, res, next) => {
  5 > 10 ? console.log("Before.") : console.log("After");
  next();
};

app.get("/about", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
});

app.use(myMiddle);
app.get("/user", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
});

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
