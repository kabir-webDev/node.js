const express = require("express");
const app = express();
const PORT = 1111;
const hanRoute = express.Router();

hanRoute.get("/form", (req, res) => {
  res.send("This is a form");
});
hanRoute.get("/insta", (req, res) => {
  res.send("This is Instagram");
});

app.get("/", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
});
app.use("/", hanRoute);
app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
