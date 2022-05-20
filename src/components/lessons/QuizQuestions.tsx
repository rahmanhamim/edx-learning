import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { QuizData } from "./LessonQuiz";
import QuizCard from "./QuizCard";

interface Props {
  quizData: QuizData[];
}

const QuizQuestions = ({ quizData }: Props) => {
  const [answers, setAnswers] = useState<any[]>([]);
  // console.log(quizData);
  console.log(answers);

  const handleQuizSubmit = (submitId: number) => {
    const foundQuestion = quizData.find(
      (question) => question.qid === submitId
    );
    console.log("found ques", foundQuestion);
    const userAnswer = answers.find((answer) => answer?.qid === submitId);

    console.log("userAnswer", userAnswer);

    if (foundQuestion?.answer === userAnswer.selected) {
      alert("correct answer");
    } else {
      alert("worng answer");
    }
  };

  return (
    <>
      {quizData.map((quiz, index) => (
        <Box key={index} sx={{ m: 5, color: "#41464B" }}>
          <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>
            Question {index + 1}
          </Typography>
          <Typography sx={{ my: 2 }}>0/0 point (ungraded)</Typography>
          <Typography sx={{ my: 1, fontSize: "1.3rem" }}>
            {quiz.question}
          </Typography>
          {/* ---------------------------------------- */}
          <QuizCard
            choices={quiz.choices}
            setAnswers={setAnswers}
            question={quiz.question}
            qid={quiz.qid}
            answers={answers}
          />

          {/* ------------------------------- */}
          <Button
            sx={{
              bgcolor: "primary.main",
              color: "primary.light",
              borderRadius: "0",
              px: 2,
              my: 3,
            }}
            onClick={() => handleQuizSubmit(quiz.qid)}
          >
            Submit
          </Button>
        </Box>
      ))}
    </>
  );
};

export default QuizQuestions;
