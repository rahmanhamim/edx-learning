import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { QuizData } from "./LessonQuiz";
import QuizCard from "./QuizCard";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  quizData: QuizData[];
  setClonedQuizData: Dispatch<SetStateAction<QuizData[]>>;
}

const QuizQuestions = ({ quizData, setClonedQuizData }: Props) => {
  const [answers, setAnswers] = useState<any[]>([]);

  const handleQuizSubmit = (submitId: number | undefined) => {
    const foundQuestion = quizData.find(
      (question) => question.qid === submitId
    );
    // console.log("found ques", foundQuestion);
    const userAnswer = answers.find((answer) => answer?.qid === submitId);

    if (!userAnswer) {
      alert("please select and answer");
      return;
    }

    if (foundQuestion) {
      if (foundQuestion?.answer === userAnswer.selected) {
        const updatedQuizData = quizData.map((ques) =>
          ques.qid !== submitId
            ? ques
            : {
                ...foundQuestion,
                userScore: 1,
                isCorrect: true,
                attempt: foundQuestion.attempt + 1,
              }
        );
        setClonedQuizData(updatedQuizData);

        console.log(updatedQuizData, "this is updated state");

        // alert("correct answer");
      } else {
        const updatedQuizData = quizData.map((ques) =>
          ques.qid !== submitId
            ? ques
            : {
                ...foundQuestion,
                userScore: 0,
                isCorrect: false,
                attempt: foundQuestion.attempt + 1,
              }
        );
        setClonedQuizData(updatedQuizData);
        // alert("worng answer");
      }
    }
  };

  return (
    <>
      {quizData.map((quiz, index) => (
        <Box key={index} sx={{ m: 5, color: "#41464B" }}>
          <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>
            Question {index + 1}
          </Typography>
          <Typography sx={{ my: 2 }}>
            {quiz.userScore}/{quiz.point} point (ungraded)
          </Typography>
          <Typography sx={{ my: 1, fontSize: "1.3rem" }}>
            {quiz.question}
          </Typography>
          {/* ---------------------------------------- */}
          <QuizCard
            choices={quiz.choices}
            setAnswers={setAnswers}
            question={quiz.question}
            qid={quiz.qid}
            quiz={quiz}
            answers={answers}
            handleQuizSubmit={handleQuizSubmit}
          />

          {quiz.isCorrect === true && (
            <>
              <CheckIcon
                sx={{
                  display: "block",
                  color: "#0D7D4D",
                  fontSize: "2rem",
                }}
              />
              <Box sx={{ borderBottom: "3px solid #0D7D4D" }}></Box>
            </>
          )}

          {quiz.isCorrect === false && (
            <>
              <CloseIcon
                sx={{ display: "block", color: "#AB0D02", fontSize: "2rem" }}
              />
              <Box sx={{ borderBottom: "3px solid #AB0D02" }}></Box>
            </>
          )}

          {/* ------------------------------- */}
        </Box>
      ))}
    </>
  );
};

export default QuizQuestions;
