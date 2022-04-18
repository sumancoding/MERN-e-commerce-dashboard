const express = require("express");
const cors = require("cors");
require("./db/config");
const userModel = require("./db/User");
const productModel = require("./db/Product");
const app = express();

app.use(express.json());
app.use(cors()); //write it as a function

app.post("/signup", async (req, res) => {
  let data = new userModel(req.body);
  let result = await data.save();
  result = result.toObject(); //pre-defined function that converts to Object
  delete result.password; //select cannot be used here because it's save, so use delete
  res.send(result);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await userModel.findOne(req.body).select("-password"); //this removes password, select can be used in find
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No result Found" });
    }
  } else {
    res.send({ result: "No result Found" });
  }
});

app.post("/add-product", async (req, res) => {
  //When we enter data in the database, it returns promise so we use async/await
  const product = new productModel(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products", async (req, res) => {
  let products = await productModel.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ products: "No product found" });
  }
});

app.delete("/product/:id", async (req, res) => {
  const result = await productModel.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/product/:id", async (req, res) => {
  let result = await productModel.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "not Found" });
  }
});

app.put("/product/:id", async (req, res) => {
  let result = await productModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(5000);
