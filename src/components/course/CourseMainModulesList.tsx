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
import Link from "next/link";

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

  const Styles = {
    aboutCourseAccordionContainer: {
      borderRadius: "0px !important",
      boxShadow: "0",
      border: ".5px solid #DFDFDF",
    },
    aboutCourseSummary: {
      py: 1,
      border: ".5px solid #DFDFDF",
      "*": {
        transform: "translateY(0%) rotate(0deg) important",
      },
    },
    circleIcon: {
      mr: 2,
      color: "#8F8F8F",
    },
    accordionDetails: {
      display: "flex",
      py: 2,
      borderBottom: "1px solid #dfdfdf",
      mx: 2,
    },
    moduleAccordionContainer: {
      borderRadius: "0px !important",
      boxShadow: "0",
      border: ".5px solid #DFDFDF",
      my: 1,
    },
    moduleAccordionSummary: {
      py: 1,
      border: ".5px solid #DFDFDF",
      "*": {
        transform: "translateY(0%) rotate(0deg) important",
      },
    },
    moduleAccordionDetails: {
      display: "flex",
      py: 2,
      borderBottom: "1px solid #dfdfdf",
      mx: 2,
    },
  };

  return (
    <Box sx={{ my: 2 }}>
      <Accordion sx={Styles.aboutCourseAccordionContainer}>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={Styles.aboutCourseSummary}
        >
          <CheckCircleOutlineIcon sx={Styles.circleIcon} />
          <Typography sx={{ fontWeight: "bold" }}>About This Course</Typography>
        </AccordionSummary>
        {/* about Accordion */}
        {course.aboutCourse.map((about) => (
          <AccordionDetails key={about.id} sx={Styles.accordionDetails}>
            <CheckCircleOutlineIcon sx={Styles.circleIcon} />
            <Link href="/">
              <a style={{ color: "#00688D" }}>{about.title}</a>
            </Link>
          </AccordionDetails>
        ))}
      </Accordion>
      {/*   --------------------- 
      Module Accordion Starts Here 
      ---------------------------- */}
      {course.modules.map((module) => (
        <Accordion key={module.title} sx={Styles.moduleAccordionContainer}>
          <AccordionSummary
            expandIcon={<CustomExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={Styles.moduleAccordionSummary}
          >
            <CheckCircleOutlineIcon sx={{ mr: 2, color: "#8F8F8F" }} />
            <Typography sx={{ fontWeight: "bold" }}>{module?.title}</Typography>
          </AccordionSummary>

          {module.moduleContent.map((lessons) => (
            <AccordionDetails
              key={lessons.id}
              sx={Styles.moduleAccordionDetails}
            >
              <CheckCircleOutlineIcon sx={{ mr: 2, color: "#8F8F8F" }} />
              {lessons.type === "html" && (
                <Link href={`/lessons/html/${lessons.id}`}>
                  <a style={{ color: "#00688D" }}>{lessons.title}</a>
                </Link>
              )}
              {lessons.type === "video" && (
                <Link href={`/lessons/video/${lessons.id}`}>
                  <a style={{ color: "#00688D" }}>{lessons.title}</a>
                </Link>
              )}
              {lessons.type === "quiz" && (
                <Link href="/lessons/quiz/1">
                  <a style={{ color: "#00688D" }}>{lessons.title}</a>
                </Link>
              )}

              {/* <Link href="/">
                <a style={{ color: "#00688D" }}>{lessons.title}</a>
              </Link> */}
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  );
};

export default CourseMainModulesList;
