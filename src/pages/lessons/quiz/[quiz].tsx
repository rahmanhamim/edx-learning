import LessonQuiz from "components/lessons/LessonQuiz";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const QuizLesson = ({ lessons }: any) => {
  const [quizData, setQuizData] = useState([]);
  // console.log(lessons);

  useEffect(() => {
    fetch("/quizData.json")
      .then((res) => res.json())
      .then((data) => setQuizData(data));
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "QUIZ_DATA_FETCH",
      payload: quizData,
    });
  }, [quizData]);

  dispatch({
    type: "QUIZ_LESSON_FETCH",
    payload: lessons,
  });

  return <LessonQuiz />;
};

export default QuizLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch("https://jsonkeeper.com/b/ZH88");
  const res = await fetch("https://jsonkeeper.com/b/887C");
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
  // const res = await fetch("https://jsonkeeper.com/b/ZH88");
  const res = await fetch("https://jsonkeeper.com/b/887C");
  const courses = await res.json();

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

  return { props: { lessons } };
};
