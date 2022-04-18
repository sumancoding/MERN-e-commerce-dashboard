import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"; //we use useParams to get id from url

const Update = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    //console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.price);
    setCompany(result.company);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(name, price, category, company);
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
                <Typography variant="h4">Update Product</Typography> <br />
                <TextField
                  label="Enter Product Name ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
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
                <br /> <br />
                <Button
                  variant="contained"
                  sx={{ bgcolor: "purple", width: "50%" }}
                  onClick={handleSubmit}
                >
                  Update Product
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Update;
