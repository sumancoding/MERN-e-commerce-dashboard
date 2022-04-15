import React, { useState } from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!name || !price || !category || !company) {
      //if name, price, category and company exists then call Api
      setError(true);
      return false;
    }

    //API reutrns async result, so we need to use async/await
    // console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id; //without JSOn.parse it gets into string
    let result = await fetch("http://localhost:5000/add-product", {
      method: "Post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Grid item xs={8}>
          <Container maxWidth="sm">
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h4">Add Product</Typography> <br />
                <TextField
                  label="Enter Product Name ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
                <br />
                {error && !name && (
                  <Typography variant="button" sx={{ color: "Red" }}>
                    Please enter a valid name.{" "}
                  </Typography>
                )}
                <br /> <br />
                <TextField
                  label="Enter Product Price ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />{" "}
                <br />
                {error && !price && (
                  <Typography variant="button" sx={{ color: "Red" }}>
                    Please enter a valid price.{" "}
                  </Typography>
                )}
                <br /> <br />
                <TextField
                  label="Enter Product Category ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />{" "}
                <br />
                {error && !category && (
                  <Typography variant="button" sx={{ color: "Red" }}>
                    Please enter a valid category.{" "}
                  </Typography>
                )}
                <br /> <br />
                <TextField
                  label="Enter Product Company ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />{" "}
                <br />
                {error && !company && (
                  <Typography variant="button" sx={{ color: "Red" }}>
                    Please enter a valid company.{" "}
                  </Typography>
                )}
                <br /> <br />
                <Button
                  variant="contained"
                  sx={{ bgcolor: "purple", width: "50%" }}
                  onClick={handleSubmit}
                >
                  Add Product
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProduct;
