import { Box, Button, Fade, Grid, Link as MuiLink, TextField, Typography } from "@mui/material";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";
import { Editor } from "@tinymce/tinymce-react";

export interface DiscussionsData {
  title: string;
  id: number;
  postContent: string;
  comments: Comment[];
}

export interface Replies {
  username: string;
  date: string;
  content: string;
}
export interface Comment {
  id: string;
  username: string;
  date: string;
  comment: string;
  replies: Replies[];
}


interface Props {
  showTopic: boolean;
}

const DiscussionPosts = ({ showTopic }: Props) => {
  const dispatch = useDispatch();

  const discussions: DiscussionsData[] = useSelector(
    (state: State) => state.discussionsData.discussionsData
  );

  discussions.sort(function (a, b) {
    return a.id - b.id;
  });

  const [singleItem, setSingleItem] = useState<DiscussionsData>();
  const [currentId, setCurrentId] = useState(discussions[0].id);
  const [currentCommentId, setCurrentCommentId] = useState('');

  const currentItem = discussions.find((item) => item.id == currentId);
  useEffect(() => {
    setSingleItem(currentItem);
  }, [currentItem]);

  const [commentText, setCommentText] = useState("");
  const [replyText, setReplyText] = useState("");

  if (!singleItem) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  const otherDatas = discussions.find((item) => item.id !== currentId);

  const handleEditorChange = (content: any) => {
    if (currentCommentId) {
      setReplyText(content);
    }
    else {
      setCommentText(content);
    }
  };

  const addReply = () => {

    if (!replyText) {
      alert('Please Write Comment');
      return;
    }
    const newReply = {
      username: "dynamic_user",
      date: new Date().toLocaleDateString(),
      content: replyText,
    };
    setReplyText("");
    setCurrentCommentId("");

    currentItem?.comments.map(comment => {
      if (comment.id === currentCommentId) {
        comment.replies = [...comment.replies, newReply];
      }
    });

    const updatedState = [otherDatas, currentItem];

    dispatch({
      type: "DISCUSSIONS_FETCH",
      payload: updatedState,
    });

  }

  const updateComment = () => {
    const updatedComment = {
      id: Math.floor(Math.random() * 100 + 20),
      username: "anonymous",
      date: new Date().toLocaleDateString(),
      comment: commentText,
      replies: []
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
        {showTopic && (
          <Grid item xs={12} sm={3} sx={{ transition: "all 1s ease-in" }}>
            <Fade in={showTopic} timeout={600}>
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
                    height: { xs: "300px", sm: "500px" },
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
                      <Typography
                        sx={{ fontWeight: "light", fontSize: ".9rem" }}
                      >
                        {post.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>
        )}

        <Grid item xs={12} sm={9}>
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
          {singleItem.comments.map((comment, index) => (
            <Box key={index} sx={{ border: "1px solid #DEE2E6", minHeight: "10vh", my: 2 }}>
              <Box sx={{ borderBottom: "1px solid #DEE2E6", marginTop: '5px' }}>

                <Box sx={{ p: 2, color: "#454545" }}>
                  <Typography sx={{ color: "#016EA8", fontSize: ".8rem" }}>
                    {comment.username}
                  </Typography>
                  <Typography sx={{ color: "#454545", fontSize: ".7rem" }}>
                    {comment.date}
                  </Typography>
                  <Typography
                    sx={{ mb: 4, fontSize: ".9rem" }}
                    dangerouslySetInnerHTML={{ __html: comment.comment }}
                  ></Typography>
                  {comment?.replies?.map((reply, index) =>
                    <Box key={index} sx={{ borderTop: "1px solid #DEE2E6", width: '100%', p: 3 }}>
                      <Typography dangerouslySetInnerHTML={{ __html: reply.content }} sx={{ fontSize: ".9rem" }} />
                      <Typography component='p' sx={{ fontSize: ".8rem" }}>
                        posted on {reply.date} by <MuiLink sx={{ color: "#00688D", fontWeight: 'bold' }}>{reply.username}</MuiLink>
                      </Typography>
                    </Box>
                  )}
                  <Box sx={{ borderTop: "1px solid #DEE2E6" }}>
                    {currentCommentId === comment.id ?
                      <>
                        <Editor
                          apiKey="oyoide2nrtdzemizwpgefdmh9vdsr36o6higj971xx2f7f07"
                          init={{
                            icons: "thin",
                            placeholder: "Write your comment...",
                            height: 250,
                            menubar: true,
                            textcolor_rows: "4",
                            toolbar:
                              "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ",
                          }}
                          onEditorChange={handleEditorChange}
                          value={replyText}
                        />

                        <Box sx={{ width: '100%', backgroundColor: '#F5F5F5', p: 4, mt: '2px' }} >
                          Preview

                          <Typography dangerouslySetInnerHTML={{ __html: replyText }}></Typography>
                        </Box>
                        <Button sx={{ mt: 1 }} variant="contained" onClick={addReply}>
                          Submit
                        </Button>
                      </>
                      :
                      <TextField sx={{ mt: 2, width: "100%" }} placeholder="Add a comment" onClick={() => setCurrentCommentId(comment.id)}></TextField>
                    }
                  </Box>
                </Box>

              </Box>
            </Box>
          ))}
          <Box>
            <Editor
              apiKey="oyoide2nrtdzemizwpgefdmh9vdsr36o6higj971xx2f7f07"
              init={{
                icons: "thin",
                placeholder: "Write your comment...",
                height: 250,
                menubar: true,
                textcolor_rows: "4",
                toolbar:
                  "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ",
              }}
              onClick={() => setCurrentCommentId('')}
              onEditorChange={handleEditorChange}
              value={commentText}
            />
            <Box sx={{ width: '100%', backgroundColor: '#F5F5F5', p: 4, mt: '2px' }} >
              Preview

              <Typography dangerouslySetInnerHTML={{ __html: commentText }}></Typography>
            </Box>
            <Button sx={{ mt: 1 }} variant="contained" onClick={updateComment}>
              Add Response
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
};

export default DiscussionPosts;
