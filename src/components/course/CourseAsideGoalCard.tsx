import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import TourIcon from "@mui/icons-material/Tour";
import FlagIcon from "@mui/icons-material/Flag";

const CourseAsideGoalCard = () => {
  const Styles = {
    goalCardsContainer: {
      boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
      borderRadius: "5px",
      p: 3,
    },
    goalTitleMain: {
      color: "primary.main",
      fontWeight: "bold",
      fontSize: "1.1rem",
      pt: 1,
    },
    goalSubtitle: {
      color: "primary.main",
      fontSize: "0.9rem",
      my: 1,
    },
    goalCardContainer: {
      display: "flex",
      justifyContent: { md: "center", lg: "space-between" },
      alignItems: "center",
      flexWrap: "wrap",
    },
    goalCard: {
      border: "3px solid #EAE6E5",
      borderRadius: "5px",
      textAlign: "center",
      p: 2,
      m: "1px",
    },
  };
  return (
    <Box sx={Styles.goalCardsContainer}>
      <Typography variant="h6" sx={Styles.goalTitleMain}>
        Set a weekly learning goal
      </Typography>
      <Typography sx={Styles.goalSubtitle}>
        Setting a goal motivates you to finish the course. You can always change
        it later.
      </Typography>
      <Box sx={Styles.goalCardContainer}>
        <Box sx={Styles.goalCard}>
          <Typography>
            <EmojiFlagsIcon />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Casual</Typography>
          <Typography>1 day a week</Typography>
        </Box>
        <Box sx={Styles.goalCard}>
          <Typography>
            <TourIcon />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Regular</Typography>
          <Typography>1 day a week</Typography>
        </Box>
        <Box sx={Styles.goalCard}>
          <Typography>
            <FlagIcon />
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Intense</Typography>
          <Typography>1 day a week</Typography>
        </Box>
      </Box>
      <Typography sx={{ mt: 2 }}>
        <Switch color="primary" /> Set a goal reminder
      </Typography>
    </Box>
  );
};

export default CourseAsideGoalCard;
