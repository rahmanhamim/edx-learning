import LessonQuiz from "components/lessons/LessonQuiz";
import React, { useEffect, useState } from "react";

const QuizLesson = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    fetch("/quizData.json")
      .then((res) => res.json())
      .then((data) => setQuizData(data));
  }, []);

  const checkAnswer = (e: React.MouseEvent) => {};

  const nextQuestion = () => {};

  return <LessonQuiz quizData={quizData} />;
};

export default QuizLesson;
