const express = require("express");
const goHandler = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schema/todoSchema");

const Todo = new mongoose.model("Todo", todoSchema);

//Get All Todos
goHandler.get("/", async (req, res) => {
  await Todo.find({ status: "inactive" })
    .select({ _id: 0, __v: 0, date: 0 })
    .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There is Server error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Todo Inserted Successfully",
        });
      }
    });
});

//Get a Todos
goHandler.get("/:id", async (req, res) => {
  await Todo.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There is Server error!",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Todo Inserted Successfully",
      });
    }
  });
});

//Post a Todos
goHandler.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There is Server error!",
      });
    } else {
      res.status(200).json({
        message: "Todo Inserted Successfully",
      });
    }
  });
});

//Post Multiple Todos
goHandler.post("/all", async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "Server side error",
      });
    } else {
      res.status(200).json({
        message: "Successfully added 🐸 ",
      });
    }
  });
});

//Put Todos
goHandler.put("/:id", async (req, res) => {
  const result = await Todo.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { status: "active" } },
    { new: true },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There is Server error!",
        });
      } else {
        res.status(200).json({
          message: "Todo Inserted Successfully",
        });
      }
    }
  );
  console.log(result);
});

//Delete Todos
goHandler.delete("/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There is Server error!",
      });
    } else {
      res.status(200).json({
        message: "Todo Deleted Successfully",
      });
    }
  });
});
module.exports = goHandler;
