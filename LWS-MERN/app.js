const express = require("express");
const app = express();
const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  res.send("This is admin Dashboard!");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  res.send("Hello World");
});

app.listen(1111, () => {
  console.log("Server is running Bro");
});
