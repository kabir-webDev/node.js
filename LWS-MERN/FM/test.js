const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/ribak", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const user = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  favFoods: [{ type: String }],
  conNumber: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user", user);

connect()
  .then(async (connection) => {
    // const user = await User.create({
    //   firstName: "Kabirul Hasan",
    //   lastName: "Sikder",
    //   favFoods: ["Khicuri", "Biriani"],
    //   conNumber: 01763180249,
    // });
    const findUser = await User.findById("60e1f9e101854f0ccc6e4b02");
    console.log(findUser);
  })
  .catch((error) => console.log(error));
