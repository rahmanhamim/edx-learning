import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { useRouter } from "next/router";
import { Today } from "@mui/icons-material";

export interface FaqData {
  title: string;
  id: number;
  postContent: string;
}

const DiscussionPosts = () => {
  const [faqData, setfaqData] = useState<FaqData[]>([]);

  useEffect(() => {
    fetch("/faqData.json")
      .then((res) => res.json())
      .then((data) => setfaqData(data));
  }, []);

  const [singleItem, setSingleItem] = useState<FaqData>();

  useEffect(() => {
    setSingleItem(faqData[0]);
  }, [faqData]);

  // ------------------ comments

  let commentsData = [
    {
      username: "chibuike_edochie",
      date: "20-Mar-22",
      comment: "Thanks for the information and the provided alternative.",
    },
    {
      username: "kwesten",
      date: "23-May-22",
      comment:
        "I cannot find the 'get started' button. I managed to start the 30 days trial but keep turning in circles trying to find out how to get started. My screen just doesn't look like the example :( I always end up here",
    },
  ];

  const [liveCommentData, setLiveCommentData] = useState(commentsData);
  const [commentText, setCommentText] = useState("");

  const addResponseBtn = () => {
    if (commentText === "") {
      alert("please enter your comment");
    }
    const newComment = {
      username: "anonymous",
      date: "Today",
      comment: commentText,
    };
    setLiveCommentData([...liveCommentData, newComment]);
    console.log(liveCommentData);
  };

  // --------------------------------

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
          {/* comments below */}
          <Box sx={{ border: "1px solid #DEE2E6", minHeight: "10vh", my: 4 }}>
            {liveCommentData.map((comment, index) => (
              <Box key={index} sx={{ borderBottom: "1px solid #DEE2E6" }}>
                <Box sx={{ p: 3 }}>
                  <Typography sx={{ color: "#016EA8", fontSize: ".8rem" }}>
                    {comment.username}
                  </Typography>
                  <Typography sx={{ color: "#4B4B4B", fontSize: ".8rem" }}>
                    {comment.date}
                  </Typography>
                  <Typography>{comment.comment}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              style={{ width: "100%", fontSize: "1rem" }}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <Button variant="contained" onClick={addResponseBtn}>
              Add Response
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussionPosts;
