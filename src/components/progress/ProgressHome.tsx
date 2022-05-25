import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProgressAside from "./ProgressAside";
import ProgressMain from "./ProgressMain";

const ProgressHome = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 2, minHeight: "60vh" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontSize: "2.3rem", my: 4 }}
      >
        Your progress
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ProgressMain />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProgressAside />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgressHome;
