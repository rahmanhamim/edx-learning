import ProgressHome from "components/progress/ProgressHome";
import { Course } from "datatypes/coursetypes";
import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

interface Props {
  courses: Course[];
}

const ProgressPage = ({ courses }: Props) => {
  const isCoursesExist = useSelector(
    (state: State) => state.courses.courseData[0]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isCoursesExist) {
      dispatch({
        type: "COURSE_FETCH",
        payload: courses,
      });
    }
  }, [courses, isCoursesExist, dispatch]);

  return <ProgressHome />;
};

export default ProgressPage;

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const res = await fetch("https://jsonkeeper.com/b/EWB1");
  const courses: Course[] = await res.json();

  return {
    props: {
      courses,
    },
  };
};
