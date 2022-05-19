import LessonHtml from "components/lessons/LessonHtml";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useDispatch } from "react-redux";
import { ModuleContent } from "../../../datatypes/coursetypes";

interface Props {
  lessons: ModuleContent[];
}

const HtmlLesson = ({ lessons }: Props) => {
  const dispatch = useDispatch();

  dispatch({
    type: "HTML_LESSON_FETCH",
    payload: lessons,
  });

  return <LessonHtml />;
};

export default HtmlLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/HDDH");
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
  const res = await fetch("https://jsonkeeper.com/b/HDDH");
  //
  const courses = await res.json();

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

  return { props: { lessons } };
};
