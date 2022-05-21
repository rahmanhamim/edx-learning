import LessonQuiz from "components/lessons/LessonQuiz";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const QuizLesson = () => {
  const [quizData, setQuizData] = useState([]);

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

  const checkAnswer = (e: React.MouseEvent) => {};

  const nextQuestion = () => {};

  return <LessonQuiz />;
};

export default QuizLesson;
