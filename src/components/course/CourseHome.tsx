import { Box, Container, Grid } from "@mui/material";
import TitleMain from "components/shared/titles/TitleMain";
import React from "react";
import CourseAsideContent from "./CourseAsideContent";
import CourseMainContent from "./CourseMainContent";

const CourseHome = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <TitleMain text="Python Basics for Data Science" my="2rem" />
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
