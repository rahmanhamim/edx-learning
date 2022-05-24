import LessonQuiz from "components/lessons/LessonQuiz";
import { Course, ModuleContent } from "datatypes/coursetypes";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  lessons: ModuleContent[];
  courses: Course[];
}

const QuizLesson = ({ lessons, courses }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses,
    });
  }, [courses, dispatch]);

  dispatch({
    type: "QUIZ_LESSON_FETCH",
    payload: lessons,
  });

  return <LessonQuiz />;
};

export default QuizLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const courses = await res.json();

  const quizLessons: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "quiz") {
        quizLessons?.push(lesson);
      }
    });
  });

  const paths = quizLessons.map((lesson: any) => ({
    params: { quiz: lesson.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const courses: Course[] = await res.json();

  const quizLessons: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "quiz") {
        lesson.moduleTitle = course.title;
        quizLessons?.push(lesson);
      }
    });
  });

  const lessons = quizLessons;

  return { props: { lessons, courses } };
};
