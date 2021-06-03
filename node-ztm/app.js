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

app.get("/", (req, res) => {
  res.send(friends);
});

app.listen(PORT, () => {
  console.log("App is up and running");
});
