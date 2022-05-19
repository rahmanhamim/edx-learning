import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";
import CourseHome from "../components/course/CourseHome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Course } from "datatypes/coursetypes";

const Home: NextPage<{ courses: Course[] }> = (courses) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses.courses,
    });
  }, [courses, dispatch]);

  return <CourseHome />;
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/HDDH");
  const courses: Course[] = await res.json();

  return {
    props: {
      courses,
    },
  };
};
