import { Box, Button, Typography } from "@mui/material";
import { Course } from "datatypes/coursetypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import styles from "../../styles/ProgressMain.module.css";
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
            className="progress-container"
            sx={{ mx: "auto", transform: "rotate(-170deg)" }}
          >
            <Box className="outer">
              <Box className="inner">
                <Box id="number" sx={{ transform: "rotate(170deg)" }}>
                  <Typography
                    sx={{
                      fontSize: "1.9rem",
                      ml: "10px",
                      fontWeight: "bold",
                      color: "#425B5F",
                    }}
                  >
                    {progressPercentage}%
                  </Typography>
                  <Typography sx={{ mt: "-10px", fontSize: ".9rem" }}>
                    completed
                  </Typography>
                </Box>
              </Box>
            </Box>
            <div className="icon-st">Hel</div>
            <svg
              className="stroke-svg"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                style={{
                  strokeDashoffset: `40`,
                  // strokeDashoffset: `${circleStrokeCalc}`,
                }}
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="square"
              />
            </svg>
          </Box>
          {/* ------------------------------------------------ */}
        </Box>
      </Box>

      {/* ------------------------------- **** --------------- */}
    </>
  );
};

export default ProgressMain;

{
  /* <Box
          sx={{
            position: "relative",
            width: 150,
            height: 150,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              "&::before": {
                content: "'completed'",
                position: "absolute",
                top: "58%",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: ".8rem",
                fontWeight: "light",
              },
            }}
          >
          // import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
          // import "react-circular-progressbar/dist/styles.css";
            <CircularProgressbar
              styles={buildStyles({
                pathColor: "#006081",
                trailColor: "#F2F0EF",
                strokeLinecap: "butt",
                textColor: "#425B5F",
              })}
              value={progressPercentage}
              text={`${progressPercentage}%`}
              strokeWidth={15}
            />
          </Box>
        </Box>
        
        // ----------------------------------------------

         <Box className={styles.circular}>
        <Box className={styles.inner}></Box>
        <Box className={styles.outer}></Box>
        <Box className={styles.numb}>0%</Box>
        <Box className={styles.circle}>
          <Box className={styles.dot}>
            <span>
              <LockIcon
                sx={{
                  fontSize: ".6rem",
                  transform: "rotate(80deg)",
                  color: "white",
                  position: "absolute",
                  top: "20%",
                  left: "20%",
                }}
              />
            </span>
          </Box>
          <Box className={`${styles.bar} ${styles.left}`}>
            <Box className={styles.progress}></Box>
          </Box>
          <Box className={`${styles.bar} ${styles.right}`}>
            <Box className={styles.progress}></Box>
          </Box>
        </Box>
      </Box>
        
        */
}
