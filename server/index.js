const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://tsuman49:XrcKBhufqKZ1ISL8@cluster0.ghjf7.mongodb.net/tutorial?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connection done");
  });
