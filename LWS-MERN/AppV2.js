const express = require("express");
const mongoose = require("mongoose");
const app = express();

const shelf1 = new mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  useFor: String,
});
app.use(express.json());
const RAK = mongoose.model("medicine", shelf1);

const run = async () => {
  await mongoose
    .connect("mongodb://localhost/medicineApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));
  // console.log(await RAK.find({}).exec());
};
run();

// const findHandler = (RAK) => async (req, res, next) => {
//   const doc = await RAK.find({}).exec();
//   res.data = doc;
//   next();
// };
// app.use("/data", findHandler, (req, res, next) => {
//   console.log(req.data);
// });

const dataHandler = async (req, res) => {
  // const doc = await RAK.find({}).exec();
  // res.send(doc);
  const poc = await RAK.findByIdAndUpdate("60e73b4d59d1f51cc48afd71", {
    price: 799,
  });
  res.send("Update is done 😄 ");
};

app.use("/myData", dataHandler);

app.get("/", async (req, res) => {
  const doc = await RAK.find({}).exec();
  res.send(doc);
});

app.post("/", async (req, res) => {
  const poc = new RAK(req.body);
  await poc.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There is some kind of Error",
      });
    } else {
      res.status(200).json({
        message: "Booom Yay!!",
      });
    }
  });
});

app.put("/", async (req, res) => {
  const poc = await RAK.findByIdAndUpdate("60e6ffeff2cbb328a0eb00ed", {
    price: 799,
  });
  res.send("Update is done 😄 ");
});

app.delete("/", async (req, res) => {
  const poc = await RAK.findByIdAndDelete("60e741ecff688f0e8c219afc");
  res.send("Delete is done 😄 ");
});

app.listen(1111, () => {
  console.log("App is running with mongo");
});
