import React from "react";
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
                <Typography variant="h4">Log In Page</Typography> <br />
                <TextField
                  label="Enter Product Name ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                />{" "}
                <br /> <br />
                <TextField
                  type="password"
                  label="Enter Product Price ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                />
                <br /> <br />
                <TextField
                  type="password"
                  label="Enter Product Category ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                />
                <br /> <br />
                <TextField
                  type="password"
                  label="Enter Product Company ..."
                  variant="outlined"
                  sx={{ width: "50%" }}
                />
                <br /> <br />
                <Button
                  type="button"
                  variant="contained"
                  sx={{ bgcolor: "purple", width: "50%" }}
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
