const express = require("express");
const path = require("path");

const PathDirectory = path.join(__dirname, "./Public");

const app = express();
app.use(express.static(PathDirectory));

app.listen(1111, () => {
  console.log("App is up and runnig");
});
