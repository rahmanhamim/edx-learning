import { Box, Button, Typography } from "@mui/material";
import React from "react";

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
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Pick up where you left off
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            fontWeight: "bold",
            "&: hover": { bgcolor: "secondary.dark" },
          }}
        >
          Start Course
        </Button>
      </Box>
    </Box>
  );
};

export default CourseMainContent;
