import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

const CourseAsideDiscount = () => {
  const Styles = {
    discountContainerBox: { border: "2px solid #DFDFDF", py: 2 },
    discountTitle: {
      fontWeight: "bold",
      px: 2,
    },
    discountTime: {
      fontWeight: "bold",
      bgcolor: "#FCF1F4",
      px: 2,
      py: 1,
      my: 1,
    },
    discountPointContainer: {
      px: 2,
      py: 1,
      "*": {
        display: "flex",
        alignItems: "start",
        mr: 1,
        my: "3px",
      },
    },
    upgradeBtn: {
      width: "100%",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    bottomDivider: {
      borderBottom: "1px solid #DFDFDF",
      mt: 2,
      height: "2px",
      width: "100%",
    },
  };

  return (
    <Box sx={Styles.discountContainerBox}>
      <Typography sx={Styles.discountTitle}>
        15% First-Time Learner Discount
      </Typography>
      <Typography sx={Styles.discountTime}>6 days left</Typography>
      <Box sx={Styles.discountPointContainer}>
        <Typography>
          <CheckSharpIcon />
          <Typography component="span">
            Earn a verified certificate of completion to showcase on your resumé
          </Typography>
        </Typography>
        <Typography>
          <CheckSharpIcon />
          <Typography component="span">
            Unlock your access to all course activities, including graded
            assignments
          </Typography>
        </Typography>
        <Typography>
          <CheckSharpIcon />
          <Typography component="span">
            Full access to course content and materials, even after the course
            ends
          </Typography>
        </Typography>
        <Typography>
          <CheckSharpIcon />
          <Typography component="span">Support our mission at edX</Typography>
        </Typography>
      </Box>
      <Typography sx={{ mx: 2 }}>
        <Button variant="contained" sx={Styles.upgradeBtn}>
          Upgrade for $84.15 ($̶9̶9)
        </Button>
      </Typography>
      <Box sx={Styles.bottomDivider}></Box>
      <Typography sx={{ textAlign: "center", pt: 2 }}>
        Use code{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          EDXWELCOME
        </Typography>{" "}
        at checkout
      </Typography>
    </Box>
  );
};

export default CourseAsideDiscount;
