import { Container } from "@mui/material";
import React, { useState } from "react";
import DiscussionPosts from "./DiscussionPosts";
import DiscussionTopBar from "./DiscussionTopBar";
import DiscussionUpgradeNotify from "./DiscussionUpgradeNotify";

const DiscussionMain = () => {
  const [showTopic, setShowTopic] = useState(true);

  const allTopicBtn = () => {
    setShowTopic(!showTopic);
  };

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
      <DiscussionTopBar allTopicBtn={allTopicBtn} />
      <DiscussionUpgradeNotify />
      <DiscussionPosts showTopic={showTopic} />
    </Container>
  );
};

export default DiscussionMain;
