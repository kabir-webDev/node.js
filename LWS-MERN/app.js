const express = require("express");
const app = express();
const router = express.Router();

router.get("/*", (req, res) => {
  res.send("Kabirul Hasan");
});

const data = (req, res, next) => {
  res.myData = { myName: "Kabir" };
  next();
};

app.use(router);

app.get("/", (req, res) => {
  res.send("This is Home");
});

app.listen(1111, () => {
  console.log("Server is running");
});
