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
import LessonBreadcrumbs from "./LessonBreadcrumbs";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const LessonVideo = () => {
  const lessons: ModuleContent[] = useSelector(
    (state: State) => state.courses.videoLessons
  );

  const router = useRouter();
  const routeID = router.query.video;

  const lesson = lessons.find(
    (lesson: any) => lesson.id.toString() === routeID
  );

  // ---------------------------------
  const courses = useSelector((state: State) => state.courses.courseData[0]);

  const nextModuleBtn = () => {
    let allRoutes: any[] = [];
    let allRouteLessonTypeIndex: any[] = [];

    courses.modules.forEach((module: any) => {
      module.moduleContent.forEach((eachMod: any) => {
        allRoutes.push(eachMod.id);
        allRouteLessonTypeIndex.push(eachMod.type);
      });
    });

    let currentRouteIndex = allRoutes.indexOf(routeID);

    if (allRoutes.length - 1 === currentRouteIndex) {
      alert("lesson finished");
      return;
    }
    let nextRoute = `/lessons/${
      allRouteLessonTypeIndex[currentRouteIndex + 1]
    }/${allRoutes[currentRouteIndex + 1]}`;

    router.push(nextRoute);
  };
  const prevModuleBtn = () => {
    let allRoutes: any[] = [];
    let allRouteLessonTypeIndex: any[] = [];

    courses.modules.forEach((module: any) => {
      module.moduleContent.forEach((eachMod: any) => {
        allRoutes.push(eachMod.id);
        allRouteLessonTypeIndex.push(eachMod.type);
      });
    });

    let currentRouteIndex = allRoutes.indexOf(routeID);

    if (currentRouteIndex === 0) {
      alert("This is first module");
      return;
    }
    let prevRoute = `/lessons/${
      allRouteLessonTypeIndex[currentRouteIndex - 1]
    }/${allRoutes[currentRouteIndex - 1]}`;

    router.push(prevRoute);
  };

  // Styles
  const Styles = {
    contentContainer: {
      border: "1px solid #EAEAEA",
      my: 2,
    },
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
    lessonDataContainer: {
      my: 3,
      width: { xs: "90%", md: "70%" },
      mx: "auto",
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
  // Styles End Here

  if (!lesson) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      {/* Breadcrumb links */}
      <LessonBreadcrumbs
        moduleTitle={lesson.moduleTitle}
        title={lesson.title}
      />
      <Box component="main" sx={{ border: "1px solid #EAEAEA", my: 2 }}>
        {/* NEXT PREVIOUS BUTTONS */}
        <Box sx={Styles.topNextPrevContainer}>
          <Button sx={Styles.topNextPrevBtn} onClick={prevModuleBtn}>
            <ArrowBackIosIcon sx={Styles.nextPrevIcon} /> Previous
          </Button>
          <Button sx={Styles.saveBtn}>
            <SaveIcon sx={{ color: "#0D7D4D" }} />
            <CheckRoundedIcon sx={{ color: "#0D7D4D" }} />
          </Button>
          <Button sx={Styles.topNextPrevBtn} onClick={nextModuleBtn}>
            Next <ArrowForwardIosIcon sx={Styles.nextPrevIcon} />
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
            <Typography sx={Styles.bookmarkBox}>
              <Typography component="span">
                <BookmarkBorderRoundedIcon sx={Styles.bookmarkIcon} />
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
              {typeof lesson.content === "string" && (
                <ReactPlayer
                  className="react-player"
                  style={{
                    width: "100%",
                  }}
                  controls={true}
                  url={lesson.content}
                />
              )}

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
        <Box sx={Styles.bottomNextPrevBtnContainer}>
          <Button sx={Styles.bottomPrevBtn} onClick={prevModuleBtn}>
            <ArrowBackIosIcon sx={Styles.nextPrevIcon} /> Previous
          </Button>
          <Button sx={Styles.bottomNextBtn} onClick={nextModuleBtn}>
            Next <ArrowForwardIosIcon sx={Styles.nextPrevIcon} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LessonVideo;
