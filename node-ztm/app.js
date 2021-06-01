const express = require("express");

const app = express();
const PORT = 1111;
app.get("/", (req, res) => {
  res.send("This is coolest");
});

app.listen(PORT, () => {
  console.log("App is up and running");
});
