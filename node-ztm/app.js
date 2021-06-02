const express = require("express");
const trigger = require("./compo/Indo");

const app = express();
const PORT = 1111;
app.use("/home", (trigger) => {
  res.send("This is coolest");
  next();
});

app.listen(PORT, () => {
  console.log("App is up and running");
});
