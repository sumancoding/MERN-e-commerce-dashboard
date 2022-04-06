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
  res.send(result);
});

app.listen(5000);
