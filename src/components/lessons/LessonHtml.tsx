import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SaveIcon from "@mui/icons-material/Save";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const LessonHtml = () => {
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
            Module 1 - Python Basics /{" "}
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
            Module Introduction and Learning Objectives
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
        {/* LESSON DATA */}
        <Box sx={{ my: 3, width: { xs: "90%", md: "70%" }, mx: "auto" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Module Introduction and Learning Objectives
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
              <BookmarkBorderRoundedIcon />
              <Typography component="span">Bookmark this page</Typography>
            </Typography>
          </Link>
          <Typography
            sx={{
              mt: 5,
              mb: 4,
              color: "#646464",
              lineHeight: "1.6",
              fontSize: "1.05rem",
            }}
          >
            This module teaches the basics of Python and begins by exploring
            some of the different data types such as integers, real numbers, and
            strings. Continue with the module and learn how to use expressions
            in mathematical operations, store values in variables, and the many
            different ways to manipulate strings.
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#646464", fontSize: "1.7rem", fontWeight: "100" }}
          >
            LEARNING OBJECTIVES
          </Typography>
          <Typography
            sx={{
              my: 3,
              color: "#646464",
              lineHeight: "1.6",
              fontSize: "1.05rem",
            }}
          >
            In this lesson, you will learn the basics of Python and you will
            write your first Python program:
          </Typography>
          <Typography
            component="ul"
            sx={{
              color: "#646464",
              mb: 6,
              fontSize: "1.05rem",
            }}
          >
            <Typography component="li">
              Demonstrate an understanding of types in python by
              converting/casting data types: strings, floats, integers.
            </Typography>
            <Typography component="li">
              Interpret variables and solve expressions by applying mathematical
              operations.
            </Typography>
          </Typography>
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

export default LessonHtml;
