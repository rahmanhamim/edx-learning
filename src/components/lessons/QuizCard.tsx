import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

interface Props {
  choices: string[] | undefined;
  setAnswers: any;
  question: string | undefined;
  qid: number | undefined;
  answers: any[];
}

const QuizCard = ({ choices, setAnswers, question, qid, answers }: Props) => {
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
  );
};

export default QuizCard;
