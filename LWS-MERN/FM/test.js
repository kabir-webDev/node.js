const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/student", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const student = mongoose.Schema({
  name: String,
});

const Student = mongoose.model("student", student);

connect()
  .then(async (connection) => {
    const stu = await Student.create({ name: "Kabir" });
    console.log(stu);
  })
  .catch((e) => console.log(e));
