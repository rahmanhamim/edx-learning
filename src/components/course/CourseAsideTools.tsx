import React from "react";
import { Box, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InfoIcon from "@mui/icons-material/Info";
import SecurityUpdateSharpIcon from "@mui/icons-material/SecurityUpdateSharp";
import ExploreSharpIcon from "@mui/icons-material/ExploreSharp";

const CourseAsideTools = () => {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Course Tools
      </Typography>
      <Box
        sx={{
          "*": {
            color: "#00688D",
            mr: 1,
            my: "2px",
            fontWeight: "light",
            fontSize: "0.9rem",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BookmarkIcon /> <Typography component="span">Bookmarks</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InfoIcon />
          <Typography component="span">Financial Assistance</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SecurityUpdateSharpIcon />
          <Typography component="span">Updates</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ExploreSharpIcon />
          <Typography component="span">Launch tour</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseAsideTools;
