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
import LessonBreadcrumbs from "./LessonBreadcrumbs";

interface Props {
  quizData: QuizData[];
}

export interface QuizData {
  question: string;
  choices: string[];
  answer: string;
}

const LessonQuiz = ({ quizData }: Props) => {
  const Styles = {
    topNextPrevContainer: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #eaeaea",
    },
    topNextPrevBtn: { px: 5, py: "10px" },
    nextPrevIcon: { fontSize: "0.8rem", mx: 1 },
    saveBtn: {
      bgcolor: "#EEF7E4",
      width: "100%",
      borderBottom: "2px solid #00262B",
      borderRadius: "0px",
      py: "10px",
    },
    bookmarkBox: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    bookmarkIcon: {
      mr: 1,
      mt: 1,
    },
    bottomNextPrevBtnContainer: {
      display: "flex",
      justifyContent: "center",
      mb: 5,
    },
    bottomPrevBtn: {
      px: 5,
      py: "10px",
      border: "1px solid #EAEAEA",
      mx: "2px",
      "&: hover": {
        bgcolor: "#454545",
        color: "#fff",
      },
    },
    bottomNextBtn: {
      px: 5,
      py: "10px",
      border: "1px solid #EAEAEA",
      mx: "2px",
      width: "400px",
      "&: hover": {
        bgcolor: "#00262b",
        color: "#fff",
      },
    },
  };

  const submitHandle = () => {};

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      {/* Breadcrumb links */}
      <LessonBreadcrumbs moduleTitle="Module_Title" title="Quiz_Title" />

      <Box component="main" sx={{ border: "1px solid #EAEAEA", my: 2 }}>
        {/* NEXT PREVIOUS BUTTONS */}
        <Box sx={Styles.topNextPrevContainer}>
          <Button sx={Styles.topNextPrevBtn}>
            <ArrowBackIosIcon sx={Styles.nextPrevIcon} /> Previous
          </Button>
          <Button sx={Styles.saveBtn}>
            <SaveIcon sx={{ color: "#0D7D4D" }} />
            <CheckRoundedIcon sx={{ color: "#0D7D4D" }} />
          </Button>
          <Button sx={Styles.topNextPrevBtn}>
            Next <ArrowForwardIosIcon sx={Styles.nextPrevIcon} />
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
        <Box sx={Styles.bottomNextPrevBtnContainer}>
          <Button sx={Styles.bottomPrevBtn}>
            <ArrowBackIosIcon sx={Styles.nextPrevIcon} /> Previous
          </Button>
          <Button sx={Styles.bottomNextBtn}>
            Next <ArrowForwardIosIcon sx={Styles.nextPrevIcon} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LessonQuiz;
