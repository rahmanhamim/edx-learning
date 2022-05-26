import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const DiscussionUpgradeNotify = () => {
  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        sx={{ bgcolor: "#D8ECF8", m: 4, p: 2, borderRadius: "5px" }}
      >
        <Box sx={{ width: { md: "50%" } }}>
          <Typography sx={{ fontWeight: "bold", color: "#383F43" }}>
            Audit Access Expires Jun 08,2022
          </Typography>
          <Typography sx={{ fontWeight: "light", color: "#383F43" }}>
            You lose all access to this course, including your progress, on Jun
            08, 2022. Upgrade by Dec 21, 2022 to get unlimited access to the
            course as long as it exists on the site.{" "}
            <Typography
              component="span"
              sx={{
                textDecoration: "underline",
                fontWeight: "bold",
                color: "rgb(0,104,141)",
                cursor: "pointer",
              }}
            >
              Upgrade now
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DiscussionUpgradeNotify;
