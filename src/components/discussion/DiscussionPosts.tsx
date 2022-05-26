import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

export interface DiscussionsData {
  title: string;
  id: number;
  postContent: string;
  comments: Comment[];
}
export interface Comment {
  username: string;
  date: string;
  comment: string;
}

const DiscussionPosts = () => {
  const dispatch = useDispatch();

  const discussions: DiscussionsData[] = useSelector(
    (state: State) => state.discussionsData.discussionsData
  );

  discussions.sort(function (a, b) {
    return a.id - b.id;
  });

  const [singleItem, setSingleItem] = useState<DiscussionsData>();
  const [currentId, setCurrentId] = useState(discussions[0].id);

  const currentItem = discussions.find((item) => item.id == currentId);
  useEffect(() => {
    setSingleItem(currentItem);
  }, [currentItem]);

  const [commentText, setCommentText] = useState("");

  if (!singleItem) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  // console.log(currentItem, "currentItemsss");

  const otherDatas = discussions.find((item) => item.id !== currentId);

  const updateComment = () => {
    const updatedComment = {
      username: "anonymous",
      date: "today",
      comment: commentText,
    };
    setCommentText("");

    const currentCommentUpdated = {
      ...currentItem,
      comments: [...currentItem!.comments, updatedComment],
    };

    const updatedState = [otherDatas, currentCommentUpdated];

    dispatch({
      type: "DISCUSSIONS_FETCH",
      payload: updatedState,
    });
  };

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
              {discussions.map((post) => (
                <Box
                  key={post.title}
                  sx={{
                    p: 1,
                    borderBottom: "1px solid #DEE2E6",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentId(post.id)}
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
            <Box sx={{ borderBottom: "1px solid #DEE2E6" }}>
              {singleItem.comments.map((comment, index) => (
                <Box key={index} sx={{ p: 3 }}>
                  <Typography sx={{ color: "#016EA8", fontSize: ".8rem" }}>
                    {comment.username}
                  </Typography>
                  <Typography sx={{ color: "#4B4B4B", fontSize: ".8rem" }}>
                    {comment.date}
                  </Typography>
                  <Typography>{comment.comment}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              style={{ width: "100%", fontSize: "1rem" }}
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
            ></textarea>
            <Button variant="contained" onClick={updateComment}>
              Add Response
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscussionPosts;
