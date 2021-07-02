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

app.get("/:id", (req, res) => {
  res.send("I'm Back Code World ... ☯️");
  console.log(req.params.id);
});

app.post("/", (req, res) => {
  res.send("Post is Done bro");
});

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
