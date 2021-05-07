const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.send("This is post Man! ");
});

app.listen(1111, () => {
  console.log("Server is running Bro");
});
