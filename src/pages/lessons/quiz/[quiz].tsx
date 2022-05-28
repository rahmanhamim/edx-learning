import LessonQuiz from "components/lessons/LessonQuiz";
import { Course, ModuleContent } from "datatypes/coursetypes";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

interface Props {
  lessons: ModuleContent[];
  courses: Course[];
}

const QuizLesson = ({ lessons, courses }: Props) => {
  const isCoursesExist = useSelector(
    (state: State) => state.courses.courseData[0]
  );
  const dispatch = useDispatch();

  if (!isCoursesExist) {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses,
    });
  }

  const isQuizExist = useSelector((state: State) => state.courses.quizLessons);
  if (isQuizExist.length == 0) {
    dispatch({
      type: "QUIZ_LESSON_FETCH",
      payload: lessons,
    });
  }

  return <LessonQuiz />;
};

export default QuizLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/EWB1");
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
  const res = await fetch("https://jsonkeeper.com/b/EWB1");
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
