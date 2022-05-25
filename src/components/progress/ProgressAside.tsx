import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const ProgressAside = () => {
  return (
    <Box
      sx={{
        boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
        borderRadius: "5px",
        bgcolor: "#FBFAF9",
        p: 4,
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Earn a certificate
      </Typography>
      <Typography
        sx={{
          fontSize: ".8rem",
          lineHeight: "1.8",
          my: 2,
          color: "#454545",
          fontWeight: "light",
        }}
      >
        You are in an audit track and do not qualify for a certificate. In order
        to work towards a certificate, upgrade your course today.
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "primary.light",
          color: "secondary.main",
          display: "block",
          width: "100%",
          boxShadow: "none",
          border: "1px solid #e6e6e6",
          "&: hover": {
            bgcolor: "secondary.main",
            color: "primary.light",
            border: "1px solid transparent",
          },
        }}
      >
        Upgrade Now
      </Button>
    </Box>
  );
};

export default ProgressAside;
