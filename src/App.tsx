import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Box, Typography, Paper } from "@mui/material";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (response: any) => {
    console.log("Login Successful:", response.profileObj);
    setIsAuthenticated(true);
  };

  const handleLoginFailure = (error: any) => {
    console.error("Login Failed:", error);
  };

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            width: "400px",
            textAlign: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to EZTechMovie
          </Typography>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </Paper>
      </Box>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
