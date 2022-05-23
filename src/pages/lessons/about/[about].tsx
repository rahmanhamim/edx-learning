import LessonAbout from "components/lessons/LessonAbout";
import { AboutCourse } from "datatypes/coursetypes";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  lessons: AboutCourse[];
}

const AboutPage = ({ lessons }: Props) => {
  const dispatch = useDispatch();
  dispatch({
    type: "ABOUT_LESSON_FETCH",
    payload: lessons,
  });

  return <LessonAbout />;
};

export default AboutPage;
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const courses = await res.json();

  const aboutCourse: any = [];

  courses[0]?.aboutCourse?.forEach((elem: any) => {
    aboutCourse.push(elem);
  });

  const paths = aboutCourse.map((lesson: any) => ({
    params: { about: lesson.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  //
  const courses = await res.json();

  const aboutCourse: any = [];

  courses[0]?.aboutCourse?.forEach((elem: any) => {
    elem.moduleTitle = elem.title;
    aboutCourse.push(elem);
  });

  const lessons = aboutCourse;

  return { props: { lessons } };
};
