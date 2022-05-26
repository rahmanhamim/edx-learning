import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { useRouter } from "next/router";

export interface FaqData {
  title: string;
  id: number;
  postContent: string;
}

const DiscussionPosts = () => {
  const [faqData, setfaqData] = useState<FaqData[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetch("/faqData.json")
      .then((res) => res.json())
      .then((data) => setfaqData(data));
  }, []);

  const [singleItem, setSingleItem] = useState<FaqData>();

  useEffect(() => {
    setSingleItem(faqData[0]);
  }, [faqData]);

  if (!singleItem) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <Box sx={{ px: 3 }}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={3}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 2,
                py: 1,
                bgcolor: "#F2F0EF",
                borderBottom: "1px solid #DEE2E6",
                "*": {
                  fontSize: "12px",
                },
              }}
            >
              <Typography>
                Show all posts <KeyboardArrowDownIcon />
              </Typography>
              <Typography>
                by recent activity <KeyboardArrowDownIcon />
              </Typography>
            </Box>
            <Box
              sx={{
                height: "500px",
                overflowY: "scroll",
                border: "1px solid #DEE2E6",
              }}
            >
              {faqData.map((post) => (
                <Box
                  key={post.title}
                  sx={{
                    p: 1,
                    borderBottom: "1px solid #DEE2E6",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setSingleItem(post)}
                >
                  <QuestionAnswerRoundedIcon
                    sx={{ fontSize: ".9rem", mr: 1 }}
                  />
                  <Typography sx={{ fontWeight: "light", fontSize: ".9rem" }}>
                    {post.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {singleItem?.title}
          </Typography>
          <Typography sx={{ fontSize: ".8rem", fontWeight: "light" }}>
            discussion posted 8 months ago by{" "}
            <Typography
              component="span"
              sx={{
                fontSize: ".8rem",
                fontWeight: "bold",
                color: "#00688D",
                textDecoration: "underline",
              }}
            >
              pratikshapv
            </Typography>
          </Typography>
          <Box
            sx={{
              "& p": {
                fontSize: "0.9rem",
              },
            }}
            dangerouslySetInnerHTML={{ __html: singleItem.postContent }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussionPosts;
