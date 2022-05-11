import { Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  my: string;
}

const TitleMain = ({ text, my }: Props) => {
  return (
    <Typography
      variant="h1"
      color="primary"
      sx={{ fontWeight: "bold", fontSize: "2rem", my: `${my}` }}
    >
      {text}
    </Typography>
  );
};

export default TitleMain;
