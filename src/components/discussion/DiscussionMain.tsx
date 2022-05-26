import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import DiscussionPosts from "./DiscussionPosts";
import DiscussionTopBar from "./DiscussionTopBar";
import DiscussionUpgradeNotify from "./DiscussionUpgradeNotify";

const DiscussionMain = () => {
  const comments = useSelector((state: State) => state.commentsData.comments);

  console.log(comments, "comments data");

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "60vh",
        my: 3,
        border: "1px solid #DEE2E6",
        padding: "0px !important",
      }}
    >
      <DiscussionTopBar />
      <DiscussionUpgradeNotify />
      <DiscussionPosts />
    </Container>
  );
};

export default DiscussionMain;
