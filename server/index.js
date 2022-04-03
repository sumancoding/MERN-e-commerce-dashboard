const express = require("express");
const cors = require("cors");
require("./db/config");
const userModel = require("./db/User");
const app = express();

//using middleware
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  // let user = new userModel(req.body);
  // let result = await user.save();
  res.send(req.body);
});

app.listen(5000);
