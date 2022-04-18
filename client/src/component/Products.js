import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []); //called only once when it loads so empty []

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    }); //Since, its get method we dont need to define method, body, headers and so on
    result = await result.json(); //still in readstream so we need to convert it to JSON format

    setProducts(result);
  };
  //console.log(products);
  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const handleSearch = async (e) => {
    //console.log(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-lists">
      <Container>
        <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
          Product Lists
        </Typography>
        <TextField
          label="Search Product"
          variant="outlined"
          style={{ width: "30%" }}
          onChange={handleSearch}
        />
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {products.length > 0 ? (
            products.map((item, id) => (
              <Grid item xl={3} lg={4} sm={6} xs={12} key={item._id}>
                <Card variant="outlined" sx={{ color: "Navy" }}>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ p: 1 }}>
                      <Box sx={{ fontWeight: "bold" }}>
                        Product Name: {item.name}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1" sx={{ p: 1 }}>
                      Product Price:{item.price}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ p: 1 }}>
                      {" "}
                      Product category: {item.category}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ p: 1 }}>
                      {" "}
                      Product company: {item.company}
                    </Typography>
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "purple", width: "40%" }}
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>{" "}
                      <Link
                        to={`/update/${item._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "purple",
                            width: "110%",
                          }}
                        >
                          Update
                        </Button>
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <h1>No Result Found !!</h1>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
