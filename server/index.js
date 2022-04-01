const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://tsuman49:c39PCnHjwNGA8zw1@cluster0.ghjf7.mongodb.net/e-commerce?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("users", productSchema);
  const data = await product.find();
  console.log(data);
};
connectDB();

app.listen(5000);

// const express = require("express");
// require("./db/config");
// const userModel = require("./db/User");
// const app = express();

// //using middleware
// app.use(express.json());

// app.post("/signup", async (req, res) => {
//   let data = new userModel(req.body);
//   let result = await data.save();
//   res.send(result);
// });

// app.listen(5000);
