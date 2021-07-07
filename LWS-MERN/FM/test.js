const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/ribak", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const medicine = mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  validity: String,
});

const Medicine = mongoose.model("medicine", medicine);

connect()
  .then(async (connection) => {
    const khuji = await Medicine.find({ name: "Napa" });
    console.log(khuji);
  })
  .catch((err) => console.log(err.message));
