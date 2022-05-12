import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";

const CourseAsideDates = () => {
  return (
    <Box sx={{ mb: 20 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", fontSize: "1.1rem", my: 2 }}
      >
        Important dates
      </Typography>
      {/* Date Content 1 */}
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Box>
              <CalendarMonthIcon />
            </Box>
          </Grid>
          <Grid item xs={11}>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Mon, May 16, 2022
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Box>
              <Typography
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "bold",
                  color: "#00688C",
                  my: "3px",
                }}
              >
                Graded Quiz: Python Basics
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Date Content 2 */}
      <Box sx={{ my: 2 }}>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Box>
              <CalendarMonthIcon />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Wed, Jun 8, 2022
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Box>
              <Typography
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "bold",
                  my: "3px",
                }}
              >
                Audit Access Expires
              </Typography>
              <Typography
                sx={{
                  fontSize: ".8rem",
                  my: "5px",
                }}
              >
                You lose all access to this course, including your progress.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Date Content 3 */}
      <Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Box>
                <CalendarMonthIcon />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  Thu, Dec 22, 2022
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <Box>
                <Typography
                  sx={{
                    fontSize: ".9rem",
                    fontWeight: "bold",
                    my: "3px",
                  }}
                >
                  Verification Upgrade Deadline
                </Typography>
                <Typography
                  sx={{
                    fontSize: ".8rem",
                    my: "5px",
                  }}
                >
                  You are still eligible to upgrade to a Verified Certificate!
                  Pursue it to highlight the knowledge and skills you gain in
                  this course. Upgrade to Verified Certificate
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Date Content 4 */}
      <Box>
        <Box sx={{ my: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Box>
                <CalendarMonthIcon />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  Sat, Dec 31, 2022
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <Box>
                <Typography
                  sx={{
                    fontSize: ".9rem",
                    fontWeight: "bold",
                    my: "3px",
                  }}
                >
                  Course ends
                </Typography>
                <Typography
                  sx={{
                    fontSize: ".8rem",
                    my: "5px",
                  }}
                >
                  After the course ends, the course content will be archived and
                  no longer active.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Link */}
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Link href="/">
              <a
                style={{
                  color: "#00688C",
                  textDecoration: "underline",
                }}
              >
                View all course dates
              </a>
            </Link>
          </Grid>
        </Grid>
      </Box>
      {/* Course Handouts */}
      <Box sx={{ my: 3 }}>
        <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold", mb: "5px" }}>
          Course Handouts
        </Typography>
        <Link href="/">
          <a
            style={{
              color: "#00688C",
              textDecoration: "underline",

              fontSize: ".8rem",
            }}
          >
            Python Cheat Sheet: The Basics
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default CourseAsideDates;
