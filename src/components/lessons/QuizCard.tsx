import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { QuizData } from "./LessonQuiz";

interface Props {
  quizData: QuizData[];
}

const QuizCard = ({ quizData }: Props) => {
  console.log(quizData, "from card");
  return (
    <FormControl sx={{ width: "100%" }}>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel
          sx={{ mx: 0, my: 1, border: "2px solid #E2E3E5" }}
          value="female"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#0075FF",
                },
              }}
            />
          }
          label="Female"
        />
        <FormControlLabel
          sx={{ mx: 0, my: 1, border: "2px solid #E2E3E5" }}
          value="male"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#0075FF",
                },
              }}
            />
          }
          label="Male"
        />
        <FormControlLabel
          sx={{ mx: 0, my: 1, border: "2px solid #E2E3E5" }}
          value="other"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#0075FF",
                },
              }}
            />
          }
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default QuizCard;
