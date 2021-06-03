const express = require("express");
const trigger = require("./compo/Indo");

const app = express();
const PORT = 1111;

const friends = [
  {
    id: 1,
    name: "Kabir",
  },
  {
    id: 2,
    name: "Hasan",
  },
  {
    id: 3,
    name: "Sikder",
  },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];
  friend
    ? res.status(200).send(friend)
    : res.status(404).json({ error: "404! Friend not found" });
  console.log(friend.name);
});
app.listen(PORT, () => {
  console.log("App is up and running");
});
