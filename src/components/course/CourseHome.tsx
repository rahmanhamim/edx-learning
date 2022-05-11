import { Box, Container, Typography } from "@mui/material";
import TitleMain from "components/shared/titles/TitleMain";
import React from "react";

const CourseHome = () => {
  return (
    <Container maxWidth="xl">
      <TitleMain text="Python Basics for Data Science" my="2rem" />
      <Box
        sx={{
          boxShadow: "1px 1px 1px 2px rgba(215,215,215,.5)",
          p: 2,
          borderRadius: "5px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Pick up where you left off
        </Typography>
      </Box>
    </Container>
  );
};

export default CourseHome;
