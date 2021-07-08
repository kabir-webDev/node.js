const mongoose = require("mongoose");

const shelf1 = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  company: String,
  price: Number,
  useFor: String,
});

const RAK = mongoose.model("medicine", shelf1);

const run = async () => {
  await mongoose
    .connect("mongodb://localhost/medicineApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));
  const create = await RAK.create({
    name: "Cinkara",
    company: "Hamdard",
    price: 120,
    useFor: "Vitamin",
  });
  const product = "60e7000c6fdd4822e8e3a1aa";
  const deleteOne = await RAK.findByIdAndDelete(product).exec();
  const findOne = await RAK.find({});
  console.log(findOne);
};
run();
