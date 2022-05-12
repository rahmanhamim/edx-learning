import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <RemoveIcon sx={{ fontSize: "1.8rem", color: "black" }} />
      </div>
      <div className="collapsIconWrapper">
        <AddIcon sx={{ fontSize: "1.8rem", color: "black" }} />
      </div>
    </Box>
  );
};

const CourseMainModulesList = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Accordion
        sx={{
          borderRadius: "0px !important",
          boxShadow: "0",
          border: ".5px solid #DFDFDF",
        }}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ py: 1, border: ".5px solid #DFDFDF" }}
        >
          <CheckCircleOutlineIcon sx={{ mr: 2 }} />
          <Typography sx={{ fontWeight: "bold" }}>About This Course</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            py: 2,
            borderBottom: "1px solid #dfdfdf",
            mx: 2,
          }}
        >
          <CheckCircleOutlineIcon sx={{ mr: 2 }} />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{
            display: "flex",
            py: 2,
            borderBottom: "1px solid #dfdfdf",
            mx: 2,
          }}
        >
          <CheckCircleOutlineIcon sx={{ mr: 2 }} />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CourseMainModulesList;
