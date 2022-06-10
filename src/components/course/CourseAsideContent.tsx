import React, { useEffect } from "react";
import CourseAsideDates from "./CourseAsideDates";
import CourseAsideDiscount from "./CourseAsideDiscount";
import CourseAsideGoalCard from "./CourseAsideGoalCard";
import CourseAsideTools from "./CourseAsideTools";

const CourseAsideContent = () => {
  return (
    <>
      <CourseAsideGoalCard />
      <CourseAsideTools />
      <CourseAsideDiscount />
      <CourseAsideDates />
    </>
  );
};

export default CourseAsideContent;
