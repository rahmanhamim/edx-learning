import React from "react";
import { Box, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InfoIcon from "@mui/icons-material/Info";
import SecurityUpdateSharpIcon from "@mui/icons-material/SecurityUpdateSharp";
import ExploreSharpIcon from "@mui/icons-material/ExploreSharp";

const CourseAsideTools = () => {
  const Styles = {
    toolsContainer: {
      "*": {
        color: "#00688D",
        mr: 1,
        my: "2px",
        fontWeight: "light",
        fontSize: "0.9rem",
      },
    },
    toolsItem: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Course Tools
      </Typography>
      <Box sx={Styles.toolsContainer}>
        <Box sx={Styles.toolsItem}>
          <BookmarkIcon /> <Typography component="span">Bookmarks</Typography>
        </Box>
        <Box sx={Styles.toolsItem}>
          <InfoIcon />
          <Typography component="span">Financial Assistance</Typography>
        </Box>
        <Box sx={Styles.toolsItem}>
          <SecurityUpdateSharpIcon />
          <Typography component="span">Updates</Typography>
        </Box>
        <Box sx={Styles.toolsItem}>
          <ExploreSharpIcon />
          <Typography component="span">Launch tour</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseAsideTools;
