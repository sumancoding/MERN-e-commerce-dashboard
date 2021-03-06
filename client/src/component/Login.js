import React, { useEffect, useState } from "react";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    //console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json(); //data needs to be converted to json format
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user)); //we cannot store JSON so we need to stringify
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Not Registered Yet. Please Sign up first");
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
                <Typography variant="h4">Log In Page</Typography> <br />
                <TextField
                  label="Enter Your Email...."
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                <Button
                  type="button"
                  variant="contained"
                  sx={{ bgcolor: "purple", width: "40%" }}
                  onClick={handleLogin}
                >
                  Log In
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
