import LessonHtml from "components/lessons/LessonHtml";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import { Course, ModuleContent } from "../../../datatypes/coursetypes";

interface Props {
  lessons: ModuleContent[];
  courses: Course[];
}

const HtmlLesson = ({ lessons, courses }: Props) => {
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

  const isHtmlLessonsExist = useSelector(
    (state: State) => state.courses.htmlLessons
  );
  if (isHtmlLessonsExist.length == 0) {
    dispatch({
      type: "HTML_LESSON_FETCH",
      payload: lessons,
    });
  }

  return <LessonHtml />;
};

export default HtmlLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const courses = await res.json();

  const htmlCourse: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "html") {
        htmlCourse?.push(lesson);
      }
    });
  });

  const paths = htmlCourse.map((lesson: any) => ({
    params: { html: lesson.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const courses: Course[] = await res.json();

  const htmlCourse: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "html") {
        lesson.moduleTitle = course.title;
        htmlCourse?.push(lesson);
      }
    });
  });

  // const courseData = htmlCourse.find(
  //   (lesson: any) => lesson.id.toString() === context.params?.html
  // );

  const lessons = htmlCourse;

  return { props: { lessons, courses } };
};
