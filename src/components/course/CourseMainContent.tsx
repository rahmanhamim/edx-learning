import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CourseMainModulesList from "./CourseMainModulesList";

const CourseMainContent = () => {
  return (
    <Box component="main">
      <Box
        sx={{
          boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
          p: 3,
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
        >
          Pick up where you left off
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            fontWeight: "bold",
            "&: hover": { bgcolor: "secondary.dark" },
            p: { xs: ".5rem 1rem", md: ".5rem 2rem" },
            fontSize: ".8rem",
          }}
        >
          Start Course
        </Button>
      </Box>
      <CourseMainModulesList />
    </Box>
  );
};

export default CourseMainContent;
