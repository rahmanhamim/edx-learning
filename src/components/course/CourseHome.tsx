import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import TitleMain from "components/shared/titles/TitleMain";
import { Course } from "datatypes/coursetypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import CourseAsideContent from "./CourseAsideContent";
import CourseMainContent from "./CourseMainContent";

const CourseHome = () => {
  const course: Course = useSelector(
    (state: State) => state.courses.courseData[0]
  );

  if (!course) {
    return (
      <Container sx={{ minHeight: "40vh", my: 4, textAlign: "center" }}>
        <CircularProgress color="primary" />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <TitleMain text={course.title} my="2rem" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CourseMainContent />
        </Grid>
        <Grid item xs={12} md={4}>
          <CourseAsideContent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseHome;
