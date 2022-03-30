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

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const collectData = () => {
    console.log(name, password, email);
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
                <Typography variant="h4">Sign Up Page</Typography> <br />
                <TextField
                  label="Enter Your Name...."
                  variant="outlined"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
                <br /> <br />
                <TextField
                  type="password"
                  label="Enter Your Password...."
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />{" "}
                <br /> <br />
                <TextField
                  label="Enter Your Email...."
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <br /> <br />
                <Button
                  variant="contained"
                  onClick={collectData}
                  sx={{ bgcolor: "purple", width: "40%" }}
                >
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
