const express = require("express");
const app = express();

const PORT = 1111;

app.use(express.json());

app.get("/user", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
});

// app.param("id", (req, res, next, id) => {
//   res.send(`${id} is being inputted`);
// });

app.get("/", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
