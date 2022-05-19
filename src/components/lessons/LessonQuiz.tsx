import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SaveIcon from "@mui/icons-material/Save";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import QuizCard from "./QuizCard";

interface Props {
  quizData: QuizData[];
}

export interface QuizData {
  question: string;
  choices: string[];
  answer: string;
}

const LessonQuiz = ({ quizData }: Props) => {
  const submitHandle = () => {
    console.log("hello quiz");
  };

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      {/* Breadcrumb links */}
      <Box sx={{ mt: 5, display: "flex", alignItems: "center" }}>
        <Link href="/">
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "&: hover": { textDecoration: "underline" },
            }}
          >
            <HomeIcon
              sx={{
                marginRight: "5px",
              }}
            />
            Course /
          </Typography>
        </Link>
        <Link href="/">
          <Typography
            sx={{
              marginLeft: "10px",
              cursor: "pointer",
              "&: hover": { textDecoration: "underline" },
            }}
          >
            lesson?.moduleTitle /
          </Typography>
        </Link>
        <Link href="/">
          <Typography
            sx={{
              marginLeft: "10px",
              cursor: "pointer",
              "&: hover": { textDecoration: "underline" },
            }}
          >
            lesson?.title
          </Typography>
        </Link>
      </Box>

      <Box component="main" sx={{ border: "1px solid #EAEAEA", my: 2 }}>
        {/* NEXT PREVIOUS BUTTONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eaeaea",
          }}
        >
          <Button sx={{ px: 5, py: "10px" }}>
            <ArrowBackIosIcon sx={{ fontSize: "0.8rem", mr: 1 }} /> Previous
          </Button>
          <Button
            sx={{
              bgcolor: "#EEF7E4",
              width: "100%",
              borderBottom: "2px solid #00262B",
              borderRadius: "0px",
              py: "10px",
            }}
          >
            <SaveIcon sx={{ color: "#0D7D4D" }} />
            <CheckRoundedIcon sx={{ color: "#0D7D4D" }} />
          </Button>
          <Button sx={{ px: 5, py: "10px" }}>
            Next <ArrowForwardIosIcon sx={{ fontSize: "0.8rem", ml: 1 }} />
          </Button>
        </Box>
        {/* ----------------------------------------------------------
        ----------------------------------------------- */}
        {/* LESSON DATA */}
        <Box sx={{ my: 3, width: { xs: "90%", md: "70%" }, mx: "auto" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Practice Quiz : Types
          </Typography>
          <Link href="/">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "*": { fontSize: ".8rem", fontWeight: "light", mr: 1, mt: 1 },
              }}
            >
              <Typography component="span">
                <BookmarkBorderRoundedIcon />
              </Typography>
              <Typography component="span">Bookmark this page</Typography>
            </Typography>
          </Link>

          {quizData.map((question, index) => (
            <Box key={index} sx={{ m: 5, color: "#41464B" }}>
              <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>
                Question {index + 1}
              </Typography>
              <Typography sx={{ my: 2 }}>0/0 point (ungraded)</Typography>
              <Typography sx={{ my: 1, fontSize: "1.3rem" }}>
                {question.question}
              </Typography>
              {/* ---------------------------------------- */}
              <QuizCard quizData={quizData} />

              {/* ------------------------------- */}
              <Button
                sx={{
                  bgcolor: "primary.main",
                  color: "primary.light",
                  borderRadius: "0",
                  px: 2,
                  my: 3,
                }}
              >
                Submit
              </Button>
            </Box>
          ))}
        </Box>
        {/* NEXT PREV BUTTON BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5,
          }}
        >
          <Button
            sx={{
              px: 5,
              py: "10px",
              border: "1px solid #EAEAEA",
              mx: "2px",
              "&: hover": {
                bgcolor: "#454545",
                color: "#fff",
              },
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "0.8rem", mr: 1 }} /> Previous
          </Button>
          <Button
            sx={{
              px: 5,
              py: "10px",
              border: "1px solid #EAEAEA",
              mx: "2px",
              width: "400px",
              "&: hover": {
                bgcolor: "#00262b",
                color: "#fff",
              },
            }}
          >
            Next <ArrowForwardIosIcon sx={{ fontSize: "0.8rem", ml: 1 }} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LessonQuiz;
