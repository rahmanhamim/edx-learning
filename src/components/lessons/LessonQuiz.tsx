import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SaveIcon from "@mui/icons-material/Save";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import LessonBreadcrumbs from "./LessonBreadcrumbs";
import QuizQuestions from "./QuizQuestions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import _ from "lodash";
import { ModuleContent, QuizData } from "datatypes/coursetypes";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const LessonQuiz = () => {
  const dispatch = useDispatch();

  const lessons: ModuleContent[] = useSelector(
    (state: State) => state.courses.quizLessons
  );

  const router = useRouter();
  const routeID = router.query.quiz;

  const lesson = lessons.find(
    (lesson: any) => lesson.id.toString() === routeID
  );

  const quizData: QuizData[] = lesson!.quizContent;

  const [clonedQuizData, setClonedQuizData] = useState<QuizData[]>([]);

  useEffect(() => {
    let clonedState = _.cloneDeep(quizData);
    setClonedQuizData(clonedState);
  }, [quizData]);

  const courses = useSelector((state: State) => state.courses.courseData[0]);

  // save and update quiz answer to redux
  let staleLesson = lessons.find(
    (lesson: any) => lesson.id.toString() !== routeID
  );

  let updatedQuiz = {
    ...lesson,
    quizContent: clonedQuizData,
    isCompleted: true,
  };
  let updatedState = [staleLesson, updatedQuiz];

  const saveBtn = () => {
    dispatch({
      type: "QUIZ_LESSON_FETCH",
      payload: updatedState,
    });

    // update is completed to main course in redux
    courses?.modules?.map((item: any) =>
      item.moduleContent.map((obj: any) => {
        if (obj.id === routeID) {
          obj.isCompleted = true;
          if (
            item.moduleContent.indexOf(obj) ==
            item.moduleContent.length - 1
          ) {
            item.isCompleted = true;
          }
        }
      })
    );
    const updatedCourses = [courses];
    dispatch({
      type: "COURSE_FETCH",
      payload: updatedCourses,
    });
    Swal.fire({
      icon: "success",
      title: "Saved!",
      timer: 1200,
      showConfirmButton: false,
    });
    // update is completed to main course in end redux
  };

  // save and update quiz answer to redux end

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
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "All lessons completed",
        confirmButtonColor: "#00688C",
      });

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

  // Styles Start
  const Styles = {
    topNextPrevContainer: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #eaeaea",
    },
    topNextPrevBtn: { px: 5, py: "10px" },
    nextPrevIcon: { fontSize: "0.8rem", mx: 1 },
    saveBtn: {
      bgcolor: `${lesson?.isCompleted ? "#EEF7E4" : ""}`,
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
  // Styles End

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
            {lesson.isCompleted ? (
              <CheckRoundedIcon sx={{ color: "#0D7D4D" }} />
            ) : (
              <SaveIcon sx={{ color: "#0D7D4D" }} />
            )}
          </Button>
          <Button sx={Styles.topNextPrevBtn} onClick={nextModuleBtn}>
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
              }}
            >
              <Typography component="span">
                <BookmarkBorderRoundedIcon sx={{ mt: 1, mr: 1 }} />
              </Typography>
              <Typography component="span">Bookmark this page</Typography>
            </Typography>
          </Link>

          <QuizQuestions
            quizData={clonedQuizData}
            setClonedQuizData={setClonedQuizData}
          />
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Button variant="contained" onClick={saveBtn}>
              Save &amp; Submit
            </Button>
          </Box>
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

export default LessonQuiz;
