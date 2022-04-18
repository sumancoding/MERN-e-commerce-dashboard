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
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectData = async () => {
    console.log(name, password, email);
    let result = await fetch("http://localhost:5000/signup", {
      method: "Post",
      body: JSON.stringify({ name, password, email }), //API doesnt take raw object so JSON.stringify is used
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result); //it is in readable stream so again we need to use await

    localStorage.setItem("user", JSON.stringify(result.result)); //setItam will store all the data into local storage , user is key
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      //when storing result into local storage it has to be converted to JSON
      navigate("/");
    }
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
                  label="Enter Your Name..."
                  variant="outlined"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
                <br /> <br />
                <TextField
                  label="Enter Your Email..."
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <br /> <br />
                <TextField
                  type="password"
                  label="Enter Your Password..."
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
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
