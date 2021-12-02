import React, { useState, useEffect } from "react";
import { Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
const Login = () => {
 
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const nameChangeHandler = (e: any) => {
    setUserName(e.target.value);
  };
  const passwordChangeHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
          navigate(`/dashboard`);
          setUserName("");
          setPassword("");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, [error]);

  return (
    <>
      <Grid style={{ marginTop: "6rem" }}>
        <form onSubmit={submitHandler}>
          <Paper
            elevation={10}
            style={{
              padding: 20,
              height: "50vh",
              width: 280,
              margin: "20px auto",
            }}
          >
            <Grid>
              <Avatar style={{ backgroundColor: "#1bbd7e", marginLeft: "45%" }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Login</h2>
            </Grid>
            {error && (
              <h4 style={{ color: "red" }}>Wrong username and password</h4>
            )}
            <TextField
              label="Username"
              placeholder="Enter Username"
              type="text"
              fullWidth
              required
              onChange={nameChangeHandler}
              value={userName}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={passwordChangeHandler}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: "2rem" }}
              fullWidth
            >
              Login
            </Button>
          </Paper>
        </form>
      </Grid>
    </>
  );
};

export default Login;
