import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
        <Box
          sx={{
            my: 6,
            mb: 8,
            width: { xs: "95%", md: "70%" },
            mx: "auto",
          }}
        >
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
          {/* Video content here */}
          <Box
            sx={{
              bgcolor: "#F5F5F5",
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <ReactPlayer
                playerOptions={{ autoplay: true }}
                className="react-player"
                style={{
                  width: "100%",
                }}
                controls={true}
                url={lesson.content}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "25%" },
                  pl: 1,
                  "*": {
                    color: "#2074B5",
                    cursor: "pointer",
                    fontSize: ".9rem",
                  },
                }}
              >
                <Box
                  sx={{
                    overflowY: "scroll",
                    height: { md: "300px", xs: "150px" },
                    mt: { xs: 3, md: "none" },
                  }}
                >
                  {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11].map((val, idx) => (
                    <Typography
                      key={idx}
                      sx={{
                        my: 2,
                        fontSize: ".9rem",
                        "&: hover": { textDecoration: "underline" },
                      }}
                    >
                      Start of transcript. Skip to the end.
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
            {/* Video content  end here */}
            {/* Video navigation content */}
            <Grid container>
              <Grid item xs={12} md={6} sx={{ my: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Video
                </Typography>
                <Typography
                  sx={{ color: "#2074B5", textDecoration: "underline" }}
                >
                  Download Video file
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ my: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Transcripts
                </Typography>
                <Typography
                  sx={{ color: "#2074B5", textDecoration: "underline" }}
                >
                  Download SubRip (.srt) file
                </Typography>
                <Typography
                  sx={{ color: "#2074B5", textDecoration: "underline" }}
                >
                  Download Text (.txt) file
                </Typography>
              </Grid>
            </Grid>
            {/* Video navigation content  end*/}
          </Box>
          <Typography sx={{ my: 2 }}>
            In the video at 1:32 the line says: &#39;Notice how the last index
            is one larger than the length of the tuple.&#39; The line should be
            read as &#39;Notice how the last index is one larger than the last
            index of the tuple.&#39;
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

export default LessonVideo;
