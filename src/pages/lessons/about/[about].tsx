import LessonAbout from "components/lessons/LessonAbout";
import { AboutCourse, Course } from "datatypes/coursetypes";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

interface Props {
  lessons: AboutCourse[];
  courses: Course[];
}

const AboutPage = ({ lessons, courses }: Props) => {
  const dispatch = useDispatch();

  const isCoursesExist = useSelector(
    (state: State) => state.courses.courseData[0]
  );
  if (!isCoursesExist) {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses,
    });
  }

  const isAboutLessonsExist = useSelector(
    (state: State) => state.courses.aboutLessons
  );
  if (isAboutLessonsExist.length == 0) {
    dispatch({
      type: "ABOUT_LESSON_FETCH",
      payload: lessons,
    });
  }

  return <LessonAbout />;
};

export default AboutPage;
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/EWB1");
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
  const res = await fetch("https://jsonkeeper.com/b/EWB1");
  const courses: Course[] = await res.json();

  const aboutCourse: any = [];

  courses[0]?.aboutCourse?.forEach((elem: any) => {
    elem.moduleTitle = elem.title;
    aboutCourse.push(elem);
  });

  const lessons = aboutCourse;

  return { props: { lessons, courses } };
};
