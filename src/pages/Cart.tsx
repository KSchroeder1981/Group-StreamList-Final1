import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

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
          Your Cart
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          You have 3 items in your cart.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckout}
          sx={{
            backgroundColor: "#6200ea",
            "&:hover": { backgroundColor: "#3700b3" },
          }}
        >
          Proceed to Checkout
        </Button>
      </Paper>
    </Box>
  );
};

export default Cart;
