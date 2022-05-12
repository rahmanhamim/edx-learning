import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import CourseHome from "../components/course/CourseHome";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);

  return <CourseHome />;
};

export default Home;
