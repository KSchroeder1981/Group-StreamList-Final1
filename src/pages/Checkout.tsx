import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Checkout: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formatted = input.replace(/(\d{4})/g, "$1 ").trim(); // Add spaces every 4 digits
    setCardNumber(formatted);
  };

  const handleSave = () => {
    if (cardNumber.length === 19 && expiry && cvv.length === 3) {
      const cardData = {
        cardNumber,
        expiry,
        cvv,
      };
      localStorage.setItem("creditCard", JSON.stringify(cardData));
      alert("Credit card saved successfully!");
    } else {
      alert("Invalid card details. Please try again.");
    }
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
          Checkout
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            variant="outlined"
            fullWidth
            value={cardNumber}
            onChange={handleCardNumberChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Expiry Date"
            placeholder="MM/YY"
            variant="outlined"
            fullWidth
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="CVV"
            placeholder="123"
            variant="outlined"
            fullWidth
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSave}
            sx={{
              backgroundColor: "#6200ea",
              "&:hover": { backgroundColor: "#3700b3" },
            }}
          >
            Save Card
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Checkout;
