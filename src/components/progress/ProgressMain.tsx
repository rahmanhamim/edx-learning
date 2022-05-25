import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressMain = () => {
  return (
    <Box
      sx={{
        boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
        p: 3,
        borderRadius: "5px",
        display: { xs: "block", md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "1.8rem", mb: 1 }}
        >
          Course completion
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: ".8rem",
            lineHeight: "1.8",
            color: "#454545",
            fontWeight: "light",
          }}
        >
          This represents how much of the course content you have completed.
          Note that some content may not yet be released.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          textAlign: "center",
          my: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 150,
            height: 150,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              "&::before": {
                content: "'completed'",
                position: "absolute",
                top: "58%",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: ".8rem",
                fontWeight: "light",
              },
            }}
          >
            <CircularProgressbar
              styles={buildStyles({
                pathColor: "#006081",
                trailColor: "#F2F0EF",
                strokeLinecap: "butt",
                textColor: "#425B5F",
              })}
              value={10}
              text="10%"
              strokeWidth={15}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressMain;
