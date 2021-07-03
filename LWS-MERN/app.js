const express = require("express");
const app = express();
const PORT = 1111;

app.use(express.json());

function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(PORT, () => {
  console.log("I'm Backing you up Bro 😄");
});
