import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SaveIcon from "@mui/icons-material/Save";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { ModuleContent } from "datatypes/coursetypes";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { useRouter } from "next/router";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const LessonVideo = () => {
  const lessons: ModuleContent[] = useSelector(
    (state: State) => state.courses.videoLessons
  );

  const router = useRouter();
  const routeID = router.query.video;
  console.log(router);

  const lesson = lessons.find(
    (lesson: any) => lesson.id.toString() === routeID
  );

  if (!lesson) {
    return <h1>Loading...</h1>;
  }

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
            {lesson?.moduleTitle} /{" "}
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
            {lesson?.title}
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
        <Box sx={{ my: 3, width: { xs: "95%", md: "70%" }, mx: "auto" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {lesson.title}
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
          <Box
            sx={{
              bgcolor: "#F5F5F5",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ReactPlayer
              style={{ border: "1px solid red" }}
              url={lesson.content}
            />
            <Box
              sx={{
                width: "30%",
                pl: 1,
                "*": {
                  color: "#2074B5",
                  cursor: "pointer",
                  "&: hover": { textDecoration: "underline" },
                },
              }}
            >
              <Typography sx={{ mb: 10 }}>
                Start of transcript. Skip to the end.
              </Typography>
              <Typography>Start of transcript. Skip to the end.</Typography>
              <Typography>Start of transcript. Skip to the end.</Typography>
            </Box>
          </Box>
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

export default LessonVideo;
