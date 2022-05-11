import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CourseHome from "../components/course/CourseHome";

const Home: NextPage = () => {
  return <CourseHome />;
};

export default Home;
