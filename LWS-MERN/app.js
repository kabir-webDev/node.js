const express = require("express");
const mongoose = require("mongoose");
const app = express();
const goHandler = require("./gohan/goHandler");

app.use(express.json());

mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.use("/todo", goHandler);

app.listen(1111, () => {
  console.log("Server is running Bro..");
});
