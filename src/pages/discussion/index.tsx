import DiscussionMain from "components/discussion/DiscussionMain";
import { GetStaticProps } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

interface Props {
  discussionsData: DiscussionsData[];
}

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

const DiscussionPage = ({ discussionsData }: Props) => {
  const dispatch = useDispatch();

  const discussions: DiscussionsData[] = useSelector(
    (state: State) => state.discussionsData.discussionsData
  );

  if (discussions.length === 0) {
    dispatch({
      type: "DISCUSSIONS_FETCH",
      payload: discussionsData,
    });
  }

  return <DiscussionMain />;
};

export default DiscussionPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonkeeper.com/b/ZR1V");
  const discussionsData: DiscussionsData[] = await res.json();

  return {
    props: {
      discussionsData,
    },
  };
};
