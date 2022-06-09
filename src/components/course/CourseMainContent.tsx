import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import CourseMainModulesList from "./CourseMainModulesList";

const CourseMainContent = () => {
  const Styles = {
    pickCourse: {
      boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
      p: 3,
      borderRadius: "5px",
      display: { xs: "block", sm: "flex" },
      justifyContent: "space-between",
    },
    pickCourseText: {
      fontWeight: "bold",
      fontSize: { xs: "1.2rem", md: "1.5rem" },
    },
    startCourseBtn: {
      bgcolor: "secondary.main",
      fontWeight: "bold",
      "&: hover": { bgcolor: "secondary.dark" },
      p: { xs: ".5rem 1rem", md: ".5rem 2rem" },
      fontSize: ".8rem",
      mt: { xs: 1, sm: 0 },
    },
  };


  const { latestLesson } = useSelector((state: State) => state.courses);
  console.log(latestLesson)

  return (
    <Box component="main">
      <Box sx={Styles.pickCourse}>
        <Typography variant="h6" sx={Styles.pickCourseText}>
          Pick up where you left off
        </Typography>
        {/* this link is static */}
        <Link href={!latestLesson ? "/lessons/about/aboutcr1" : latestLesson}>
          <a>
            <Button variant="contained" sx={Styles.startCourseBtn}>
              {!latestLesson ? "Start Course" : "Resume Course"}
            </Button>
          </a>
        </Link>
      </Box>
      <CourseMainModulesList />
    </Box>
  );
};

export default CourseMainContent;
