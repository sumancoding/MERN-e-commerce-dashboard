const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tsuman49:c39PCnHjwNGA8zw1@cluster0.ghjf7.mongodb.net/e-commerce?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
