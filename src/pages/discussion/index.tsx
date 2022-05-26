import DiscussionMain from "components/discussion/DiscussionMain";
import { GetStaticProps } from "next";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  comments: CommentData[];
}
interface CommentData {
  username: string;
  comment: string;
  date: string;
}

const DiscussionPage = ({ comments }: Props) => {
  const dispatch = useDispatch();

  dispatch({
    type: "COMMENTS_FETCH",
    payload: comments,
  });

  return <DiscussionMain />;
};

export default DiscussionPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/comments");
  const comments: CommentData[] = await res.json();

  return {
    props: {
      comments,
    },
  };
};
