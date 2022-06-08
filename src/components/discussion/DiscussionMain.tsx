import { Box, Container } from "@mui/material";
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
    <Box sx={{
      padding: '0 1.5em'
    }}>
      <Box
        sx={{
          minHeight: "60vh",
          my: 3,
          border: "1px solid #DEE2E6",
          // border: "1px solid red",
          padding: "0px !important",
          width: "100%",
          margin: '0 auto'
        }}
      >
        <DiscussionTopBar allTopicBtn={allTopicBtn} />
        <DiscussionUpgradeNotify />
        <DiscussionPosts showTopic={showTopic} />
      </Box>
    </Box>
  );
};

export default DiscussionMain;
