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
import { Course } from "datatypes/coursetypes";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";

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
  const course: Course = useSelector(
    (state: State) => state.courses.courseData[0]
  );

  console.dir(course.modules);

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
          sx={{
            py: 1,
            border: ".5px solid #DFDFDF",
            "*": {
              transform: "translateY(0%) rotate(0deg) important",
            },
          }}
        >
          <CheckCircleOutlineIcon sx={{ mr: 2, color: "#8F8F8F" }} />
          <Typography sx={{ fontWeight: "bold" }}>About This Course</Typography>
        </AccordionSummary>
        {/* about Accordion */}
        {course.aboutCourse.map((about) => (
          <AccordionDetails
            key={about.id}
            sx={{
              display: "flex",
              py: 2,
              borderBottom: "1px solid #dfdfdf",
              mx: 2,
            }}
          >
            <CheckCircleOutlineIcon sx={{ mr: 2, color: "#8F8F8F" }} />
            <Typography sx={{ color: "#00688D" }}>{about.title}</Typography>
          </AccordionDetails>
        ))}
      </Accordion>
      {/*  ---------
      
      
      ---------------
      
      
      ---------   */}
      {course.modules.map((module) => (
        <Accordion
          key={module.title}
          sx={{
            borderRadius: "0px !important",
            boxShadow: "0",
            border: ".5px solid #DFDFDF",
            my: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<CustomExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              py: 1,
              border: ".5px solid #DFDFDF",
              "*": {
                transform: "translateY(0%) rotate(0deg) important",
              },
            }}
          >
            <CheckCircleOutlineIcon sx={{ mr: 2, color: "#8F8F8F" }} />
            <Typography sx={{ fontWeight: "bold" }}>{module?.title}</Typography>
          </AccordionSummary>

          {module.moduleContent.map((lessons) => (
            <AccordionDetails
              key={lessons.id}
              sx={{
                display: "flex",
                py: 2,
                borderBottom: "1px solid #dfdfdf",
                mx: 2,
              }}
            >
              <CheckCircleOutlineIcon sx={{ mr: 2, color: "#8F8F8F" }} />
              <Typography sx={{ color: "#00688D" }}>{lessons.title}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  );
};

export default CourseMainModulesList;
