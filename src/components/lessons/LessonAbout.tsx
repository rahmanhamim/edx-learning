import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SaveIcon from "@mui/icons-material/Save";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { AboutCourse } from "datatypes/coursetypes";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { useRouter } from "next/router";
import LessonBreadcrumbs from "./LessonBreadcrumbs";

const LessonAbout = () => {
  const lessons: AboutCourse[] = useSelector(
    (state: State) => state.courses.aboutLessons
  );
  // console.log(lessons);

  const router = useRouter();
  const routeID = router.query.about;

  const lesson = lessons.find(
    (lesson: any) => lesson.id.toString() === routeID
  );
  // ----------------------------------------------------------
  const courses = useSelector((state: State) => state.courses.courseData[0]);
  const nextModuleBtn = () => {
    let aboutRoutes: any[] = [];
    let allRouteAboutTypeIndex: any[] = [];
    courses.aboutCourse.forEach((about: any) => {
      aboutRoutes.push(about.id);
      allRouteAboutTypeIndex.push("about");
    });

    let allLessonsRoutes: any[] = [];
    let allRouteLessonTypeIndex: any[] = [];
    courses.modules.forEach((module: any) => {
      module.moduleContent.forEach((eachMod: any) => {
        allLessonsRoutes.push(eachMod.id);
        allRouteLessonTypeIndex.push(eachMod.type);
      });
    });

    let currentRouteIndex = aboutRoutes.indexOf(routeID);

    if (aboutRoutes.length - 1 === currentRouteIndex) {
      let nextModuleRoute = `/lessons/${allRouteLessonTypeIndex[0]}/${allLessonsRoutes[0]}`;
      router.push(nextModuleRoute);
      return;
    }
    let nextRoute = `/lessons/${
      allRouteAboutTypeIndex[currentRouteIndex + 1]
    }/${aboutRoutes[currentRouteIndex + 1]}`;

    router.push(nextRoute);
  };

  const prevModuleBtn = () => {
    let aboutRoutes: any[] = [];
    let allRouteAboutTypeIndex: any[] = [];

    courses.aboutCourse.forEach((about: any) => {
      aboutRoutes.push(about.id);
      allRouteAboutTypeIndex.push("about");
    });

    let currentRouteIndex = aboutRoutes.indexOf(routeID);

    if (currentRouteIndex === 0) {
      alert("This is first module");
      return;
    }
    let prevRoute = `/lessons/${
      allRouteAboutTypeIndex[currentRouteIndex - 1]
    }/${aboutRoutes[currentRouteIndex - 1]}`;

    router.push(prevRoute);
  };

  // Styles Here
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
    links: {
      display: "block",
      marginBottom: "15px",
      color: "#00688D",
      textDecoration: "underline",
      fontSize: "1.2rem",
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

      <Box component="main" sx={Styles.contentContainer}>
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
        <Box sx={Styles.lessonDataContainer}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {lesson?.title}
          </Typography>
          <Link href="/">
            <Typography sx={Styles.bookmarkBox}>
              <Typography component="span">
                <BookmarkBorderRoundedIcon sx={Styles.bookmarkIcon} />
              </Typography>
              <Typography component="span">Bookmark this page</Typography>
            </Typography>
          </Link>

          <Box
            sx={{
              color: "#646464",
              my: 8,
              "& p": { fontSize: "1.2rem" },
              "& h3": { fontSize: "2rem", fontWeight: "500" },
              "& li": { fontSize: "1.2rem", lineHeight: "1.5" },
            }}
            dangerouslySetInnerHTML={{ __html: lesson.textContent }}
          ></Box>
          {lesson.links.map((link, index) => (
            <Link key={index} href="/">
              <a style={Styles.links}>{link}</a>
            </Link>
          ))}
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

export default LessonAbout;
