const express = require("express");
const cors = require("cors");
require("./db/config");
const userModel = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors()); //write it as a function

app.post("/signup", async (req, res) => {
  let data = new userModel(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await userModel.findOne(req.body).select("-password"); //this removes password

    if (user) {
      res.send(user);
    } else {
      res.send("No result found");
    }
  } else {
    console.log("Not found !!");
  }
});

app.listen(5000);
