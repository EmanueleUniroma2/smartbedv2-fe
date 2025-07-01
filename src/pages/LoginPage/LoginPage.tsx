import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import ApiService from "../../services/api/ApiService";
import "./style.scss";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await ApiService.SessionController.login(username, password);
      console.log("Login successful:", data);

      // Optional: Navigate or trigger authenticated state update
      // localStorage.setItem("sessionToken", data.token) already handled in controller
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🌐 Full-page loader */}
      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Container className="login-page">
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>

        <form className="login-form" onSubmit={handleLogin}>
          <TextField
            label="Username"
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
