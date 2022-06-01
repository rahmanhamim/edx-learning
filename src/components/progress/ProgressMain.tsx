import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Course } from "datatypes/coursetypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import LockIcon from "@mui/icons-material/Lock";

const ProgressMain = () => {
  const courses: Course = useSelector(
    (state: State) => state.courses.courseData[0]
  );

  let aboutModuls = courses?.aboutCourse.length;
  let allModules = 0;
  courses?.modules?.forEach((eachMod) => {
    allModules = allModules + eachMod.moduleContent.length;
  });

  let totalModules = allModules + aboutModuls;

  const allCourse = useSelector((state: State) => state.courses);

  let userCompletedModules = 0;

  allCourse.aboutLessons.forEach((lesson: any) => {
    if (lesson.isCompleted) {
      userCompletedModules = userCompletedModules + 1;
    }
  });
  allCourse.htmlLessons.forEach((lesson: any) => {
    if (lesson.isCompleted) {
      userCompletedModules = userCompletedModules + 1;
    }
  });
  allCourse.videoLessons.forEach((lesson: any) => {
    if (lesson.isCompleted) {
      userCompletedModules = userCompletedModules + 1;
    }
  });
  allCourse.quizLessons.forEach((lesson: any) => {
    if (lesson.isCompleted) {
      userCompletedModules = userCompletedModules + 1;
    }
  });

  let progressPercentage = (100 / totalModules) * userCompletedModules;

  let circleStrokeCalc = 440 - 440 * (progressPercentage / 100);

  let iconRotateAngle = progressPercentage * 3.6;

  return (
    <>
      <Box
        sx={{
          boxShadow: "1px 1px 2px 1px rgba(215,215,215,.5)",
          p: 3,
          borderRadius: "5px",
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "1.8rem", mb: 1 }}
          >
            Course completion
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: ".8rem",
              lineHeight: "1.8",
              color: "#454545",
              fontWeight: "light",
            }}
          >
            This represents how much of the course content you have completed.
            Note that some content may not yet be released.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            textAlign: "center",
            my: { xs: 2, md: 0 },
          }}
        >
          {/* ----------------------------------------------- */}
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <CircularProgress
              color="primary"
              sx={{
                color: "#fff",
                position: "absolute",
                zIndex: "102",
                top: "49%",
                left: "50%",
                transform: "translate(-50%, -50%) !important",
              }}
              variant="determinate"
              value={100}
              size={131}
              thickness={22}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.6rem",
                fontWeight: "bold",
                color: "#00262B",
                zIndex: "200",
              }}
            >
              {progressPercentage}%
              <Typography sx={{ fontSize: "0.7rem", mt: "-5px" }}>
                complete
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                background:
                  "linear-gradient(360deg,rgba(17, 10, 148, 0) 0%, rgba(55, 187, 23, 0) 51%, rgba(0, 0, 0, 1) 52%, rgba(0, 0, 0, 1) 100%)",
                color: "#fff",
                height: "180px",
                left: "50%",
                transform: `translateX(-50%) rotate(${iconRotateAngle}deg)`,
                zIndex: 100,
              }}
            >
              {progressPercentage < 100 && (
                <LockIcon
                  sx={{ padding: "2px", borderLeft: "2px solid #fff" }}
                />
              )}
            </Box>
            <CircularProgress
              color="primary"
              sx={{ color: "#F2F0EF" }}
              variant="determinate"
              value={100}
              size={180}
              thickness={6}
            />
            <CircularProgress
              color="primary"
              sx={{ color: "#00688C", position: "absolute", top: 0, left: 0 }}
              variant="determinate"
              value={progressPercentage}
              size={180}
              thickness={6}
            />
            <CircularProgress
              color="primary"
              sx={{
                color: "#fff",
                position: "absolute",
                top: "-13px",
                left: "-14px",
                zIndex: "1000",
              }}
              variant="determinate"
              value={100}
              size={206}
              thickness={3}
            />
          </Box>
          {/* ------------------------------------------------ */}
        </Box>
      </Box>

      {/* ------------------------------- **** --------------- */}
    </>
  );
};

export default ProgressMain;
