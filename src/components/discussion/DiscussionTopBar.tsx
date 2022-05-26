import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const DiscussionTopBar = () => {
  const Styles = {
    btnStyles: {
      mr: 2,
      boxShadow: "none",
      border: "1px solid #DEE2E6",
      bgcolor: "primary.light",
      color: "primary.main",
      px: { xs: 1, md: 2 },
      "&: hover": {
        border: "1px solid transparent",
        color: "primary.light",
      },
    },
  };
  return (
    <Box
      sx={{
        borderBottom: "1px solid #DEE2E6",
        p: 3,
        display: { xs: "block", md: "flex" },
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "rgb(0,104,141)",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          "*": {
            fontSize: "1rem",
          },
        }}
      >
        <MenuIcon sx={{ mr: 1 }} />
        <Typography component="span">All Topics</Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "*": {
            fontSize: ".8rem",
          },
        }}
      >
        <Button variant="contained" sx={{ ...Styles.btnStyles }}>
          Add Post
        </Button>
        <input
          type="text"
          style={{
            padding: "13px 5px",
            border: "1px solid #DEE2E6",
            borderRadius: "none",
            fontSize: "1rem",
          }}
        />
        <Button variant="contained" sx={Styles.btnStyles}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default DiscussionTopBar;
