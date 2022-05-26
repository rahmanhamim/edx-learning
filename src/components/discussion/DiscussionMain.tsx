import { Container } from "@mui/material";
import React from "react";
import DiscussionPosts from "./DiscussionPosts";
import DiscussionTopBar from "./DiscussionTopBar";
import DiscussionUpgradeNotify from "./DiscussionUpgradeNotify";

const DiscussionMain = () => {
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
