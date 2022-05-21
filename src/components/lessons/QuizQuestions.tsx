import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { QuizData } from "./LessonQuiz";
import QuizCard from "./QuizCard";

interface Props {
  quizData: QuizData[];
  setClonedQuizData: Dispatch<SetStateAction<QuizData[]>>;
}

const QuizQuestions = ({ quizData, setClonedQuizData }: Props) => {
  const [answers, setAnswers] = useState<any[]>([]);

  const dispatch = useDispatch();

  const handleQuizSubmit = (submitId: number | undefined) => {
    const foundQuestion = quizData.find(
      (question) => question.qid === submitId
    );
    console.log("found ques", foundQuestion);
    const userAnswer = answers.find((answer) => answer?.qid === submitId);

    console.log("userAnswer", userAnswer);

    if (foundQuestion?.answer === userAnswer.selected) {
      const updatedQuizData = quizData.map((ques) =>
        ques.qid !== submitId ? ques : { ...foundQuestion, userScore: 1 }
      );
      setClonedQuizData(updatedQuizData);

      console.log(updatedQuizData, "this is updated state");

      alert("correct answer");
      // dispatch({
      //   type: "SET_CORRECT_ANSEWER",
      //   payload: quizData,
      // });
    } else {
      const updatedQuizData = quizData.map((ques) =>
        ques.qid !== submitId ? ques : { ...foundQuestion, userScore: 0 }
      );
      setClonedQuizData(updatedQuizData);
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
