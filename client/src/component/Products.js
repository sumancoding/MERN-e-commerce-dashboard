import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  Box,
} from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products"); //Since, its get method we dont need to define method, body, headers and so on
    result = await result.json();
    setProducts(result);
  };
  console.log(products);
  return (
    <div>
      <Container>
        <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
          Product Lists
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {products.map((item, id) => (
            <Grid item xl={3} lg={4} sm={6} xs={12} key={id}>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
