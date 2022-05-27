import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import React from "react";

interface Props {
  moduleTitle: string | undefined;
  title: string;
}

const LessonBreadcrumbs = ({ moduleTitle, title }: Props) => {
  const Styles = {
    breadcrumbsContainer: {
      mt: 5,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    courseText: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      "&: hover": { textDecoration: "underline" },
    },
    linksText: {
      marginLeft: "10px",
      cursor: "pointer",
      "&: hover": { textDecoration: "underline" },
    },
    slashDivider: {
      ml: 1,
    },
  };

  return (
    <Box sx={Styles.breadcrumbsContainer}>
      <Link href="/">
        <Typography sx={Styles.courseText}>
          <HomeIcon
            sx={{
              marginRight: "5px",
            }}
          />
          Course
        </Typography>
      </Link>
      <Typography component="span" sx={Styles.slashDivider}>
        /
      </Typography>
      <Link href="/">
        <Typography sx={Styles.linksText}>{moduleTitle} </Typography>
      </Link>
      <Typography component="span" sx={Styles.slashDivider}>
        /
      </Typography>
      <Link href="/">
        <Typography sx={Styles.linksText}>{title}</Typography>
      </Link>
    </Box>
  );
};

export default LessonBreadcrumbs;
