import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Questions = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}: any) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef<any>();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e: any) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e: any) => {
    if (selected === "") {
      setError("please select an answer");
    }

    onAnswerUpdate((prevState: any) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    // setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <Box>
      {/* card */}
      <Box>
        {/* card content */}
        <Box>
          {/* Content */}
          <Typography variant="h3" sx={{ my: 2 }}>
            Question here{data.question}
          </Typography>
        </Box>
        <Box ref={radiosWrapper}>
          {/* controls */}
          {data.choices.map((choice: any) => (
            <label
              key={choice}
              style={{
                backgroundColor: "#EAECED",
                padding: "5px",
                margin: "10px",
                display: "block",
              }}
            >
              <input
                type="radio"
                name="answer"
                value={choice}
                // onChange={(e) => changeHandler(e)}
              />
              {choice}
            </label>
          ))}
        </Box>
        {error && <Box sx={{ my: 2, color: "red" }}>Error here {error} </Box>}
        <Button variant="contained" onClick={nextClickHandler}>
          Next/submit
        </Button>
      </Box>
    </Box>
  );
};

export default Questions;
