import { Box, CircularProgress } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";

const Test = () => {
  return (
    <Box
      sx={{
        m: 10,
        position: "relative",
        border: "2px solid purple",
        display: "inline-block",
      }}
    >
      <CircularProgress
        color="primary"
        sx={{
          color: "#fff",
          position: "absolute",
          zIndex: "102",
          top: "49%",
          left: "50%",
          transform: "translate(-50%, -50%) !important",
        }}
        variant="determinate"
        value={100}
        size={131}
        thickness={22}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.6rem",
          fontWeight: "bold",
          color: "#00262B",
          zIndex: "200",
        }}
      >
        100%
      </Box>
      <Box
        sx={{
          position: "absolute",
          background:
            "linear-gradient(360deg,rgba(17, 10, 148, 0) 0%, rgba(55, 187, 23, 0) 51%, rgba(0, 0, 0, 1) 52%, rgba(0, 0, 0, 1) 100%)",
          color: "#fff",
          height: "180px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
        }}
      >
        <LockIcon sx={{ padding: "2px" }} />
      </Box>
      <CircularProgress
        color="primary"
        sx={{ color: "#aaa" }}
        variant="determinate"
        value={100}
        size={180}
        thickness={6}
      />
      <CircularProgress
        color="primary"
        sx={{ color: "#00688C", position: "absolute", top: 0, left: 0 }}
        variant="determinate"
        value={50}
        size={180}
        thickness={6}
      />
      <CircularProgress
        color="primary"
        sx={{
          color: "#fff",
          position: "absolute",
          top: "-13px",
          left: "-14px",
          zIndex: "1000",
        }}
        variant="determinate"
        value={100}
        size={206}
        thickness={3}
      />
    </Box>
  );
};
export default Test;

{
  /* <Box
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
          // import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
          // import "react-circular-progressbar/dist/styles.css";
            <CircularProgressbar
              styles={buildStyles({
                pathColor: "#006081",
                trailColor: "#F2F0EF",
                strokeLinecap: "butt",
                textColor: "#425B5F",
              })}
              value={progressPercentage}
              text={`${progressPercentage}%`}
              strokeWidth={15}
            />
          </Box>
        </Box>
        
        // ----------------------------------------------
        
        
        */
}
