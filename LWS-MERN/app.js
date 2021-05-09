const express = require("express");
const app = express();
const adminRoute = express.Router();

app.use(express.json());

adminRoute.get("/dashboard", (req, res) => {
  res.send("This is admin Dashboard!");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Hello World");
});

app.post("/user", (req, res) => {
  console.log(req.body.name);
  res.send("Hello World Post!");
});

app.listen(1111, () => {
  console.log("Server is running Bro");
});
