import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { QuizData } from "datatypes/coursetypes";

interface Props {
  choices: string[] | undefined;
  setAnswers: any;
  question: string | undefined;
  qid: number | undefined;
  quiz: QuizData;
  answers: any[];
  handleQuizSubmit: (submitId: number | undefined) => void;
}

const QuizCard = ({
  choices,
  setAnswers,
  question,
  qid,
  quiz,
  answers,
  handleQuizSubmit,
}: Props) => {
  const radioChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (answers.length === 0) {
      setAnswers((prevState: any[]) => [
        ...prevState,
        { question: question, selected: e.target?.value, qid: qid },
      ]);
    }

    const exist = answers.find((answer) => answer.qid === qid);

    const newAnswer = answers.map((ans) =>
      ans.qid !== qid
        ? ans
        : { question: question, selected: e.target?.value, qid: qid }
    );

    if (exist) {
      // console.log("if it exists");
      setAnswers(newAnswer);
    }

    if (!exist && answers.length !== 0) {
      // console.log("it doesn't exsist on array");
      setAnswers((prevState: any[]) => [
        ...prevState,
        { question: question, selected: e.target?.value, qid: qid },
      ]);
    }
  };

  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const selectQuizOption = (choice: string) => {
    setSelectedChoice(choice);
  };

  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          {choices?.map((choice, index) => (
            <FormControlLabel
              key={index}
              sx={{
                mx: 0,
                my: 1,
                border:
                  selectedChoice === choice
                    ? "2px solid #00688D"
                    : "2px solid #E2E3E5",
              }}
              value={choice}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#0075FF",
                    },
                  }}
                  onChange={(e) => radioChanger(e)}
                  onClick={() => selectQuizOption(choice)}
                />
              }
              label={choice}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box>
        {quiz.isCorrect === false && (
          <>
            <CloseIcon
              sx={{
                display: "block",
                color: "#AB0D02",
                fontSize: "2rem",
                my: "5px",
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                lineHeight: "1.2",
              }}
            >
              Answer
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: "1.2", mb: 1 }}>
              Incorrect: incorrect, {quiz.explanation}
            </Typography>
          </>
        )}
        {quiz.isCorrect === true && (
          <>
            <CheckIcon
              sx={{
                display: "block",
                color: "#0D7D4D",
                fontSize: "2rem",
                my: "5px",
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                lineHeight: "1.2",
              }}
            >
              Answer
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", lineHeight: "1.2", mb: 1 }}>
              Correct: Correct, {quiz.explanation}
            </Typography>
          </>
        )}
      </Box>
      <Button
        sx={{
          width: "120px",
          bgcolor: "primary.main",
          color: "primary.light",
          borderRadius: "0",
          px: 2,
          my: 1,
          "&:hover": {
            bgcolor: "secondary.light",
          },
          "&:disabled": {
            backgroundColor: "#F9F9F9",
            color: "#C6C6C6",
            border: "1px solid #C6C6C6",
          },
        }}
        disabled={quiz.attempt == 2 ? true : selectedChoice ? false : true}
        onClick={() => handleQuizSubmit(qid)}
      >
        Submit
      </Button>
      <Typography component="span" sx={{ ml: 2 }}>
        You have used {quiz.attempt} of 2 attempts
      </Typography>
    </>
  );
};

export default QuizCard;
