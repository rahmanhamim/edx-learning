import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface Props {
  choices: string[];
  setAnswers: any;
  question: string;
}

const QuizCard = ({ choices, setAnswers, question }: Props) => {
  const radioChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers((prevState: any[]) => [
      ...prevState,
      { question: question, selected: e.target?.value },
    ]);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {choices.map((choice, index) => (
          <FormControlLabel
            key={index}
            sx={{ mx: 0, my: 1, border: "2px solid #E2E3E5" }}
            value={choice}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#0075FF",
                  },
                }}
                onChange={(e) => radioChanger(e)}
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

/* 

 <>
      {choices.map((choice: any, index: any) => (
        <FormControl key={index} sx={{ width: "100%" }}>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> 
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              sx={{ mx: 0, my: 1, border: "2px solid #E2E3E5" }}
              value={choice}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "#0075FF",
                    },
                  }}
                />
              }
              label={choice}
            />
          </RadioGroup>
        </FormControl>
      ))}
    </>

*/
