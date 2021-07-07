const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");
const PORT = 1111;

//initialization of app
const app = express();
app.use(express.json());

//database connection with mongoose
mongoose
  .connect("mongodb://localhost/task", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

app.use("/todo", todoHandler);
app.get("/", (req, res) => {
  res.send("Home");
});
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
