import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";
import CourseHome from "../components/course/CourseHome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Course } from "datatypes/coursetypes";
import { State } from "redux/reducers";

const Home: NextPage<{ courses: Course[] }> = (courses) => {
  const isCoursesExist = useSelector(
    (state: State) => state.courses.courseData[0]
  );

  const dispatch = useDispatch();

  // useEffect used for this warning: "cannot update a component while rendering a different component"
  useEffect(() => {
    if (!isCoursesExist) {
      dispatch({
        type: "COURSE_FETCH",
        payload: courses.courses,
      });
    }
  }, [courses.courses, isCoursesExist, dispatch]);

  return <CourseHome />;
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const res = await fetch("https://jsonkeeper.com/b/I6ZT");
  const courses: Course[] = await res.json();

  return {
    props: {
      courses,
    },
  };
};
