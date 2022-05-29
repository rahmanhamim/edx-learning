import { Box, Container, Grid, Typography } from "@mui/material";
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

//  <Box
//    sx={{
//      position: "relative",
//      height: "200px",
//      width: "200px",
//      bgcolor: "coral",
//    }}
//  >
//    <svg
//      xmlns="http://www.w3.org/2000/svg"
//      version="1.1"
//      width="160px"
//      height="160px"
//      style={{ position: "absolute", top: "100px" }}
//    >
//      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
//    </svg>
//  </Box>;
