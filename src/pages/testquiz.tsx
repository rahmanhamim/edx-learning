import { Container } from "@mui/material";
import End from "components/quiztest/End";
import Questions from "components/quiztest/Questions";
import React, { useState } from "react";
import quizData from "../../public/quizData.json";

const TestQuiz = () => {
  const [step, setStep] = useState(2);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  console.log(answers);

  return (
    <Container sx={{ my: 20 }}>
      {step === 2 && (
        <Questions
          data={quizData[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && <End results={answers} data={quizData} />}
    </Container>
  );
};

export default TestQuiz;
