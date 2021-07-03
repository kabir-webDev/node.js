const express = require("express");
const mongoose = require("mongoose");
const PORT = 1111;

//initialization of app
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose
  .connect("mongodb://localhost/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
