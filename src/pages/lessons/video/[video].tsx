import LessonVideo from "components/lessons/LessonVideo";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useDispatch } from "react-redux";

const VideoLesson = ({ lessons }: any) => {
  const dispatch = useDispatch();

  dispatch({
    type: "VIDEO_LESSON_FETCH",
    payload: lessons,
  });

  return <LessonVideo />;
};

export default VideoLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/HDDH");
  const courses = await res.json();

  const videoCourse: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "video") {
        videoCourse?.push(lesson);
      }
    });
  });

  const paths = videoCourse.map((lesson: any) => ({
    params: { video: lesson.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/HDDH");
  const courses = await res.json();

  const videoCourse: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "video") {
        lesson.moduleTitle = course.title;
        videoCourse?.push(lesson);
      }
    });
  });

  const lessons = videoCourse;

  return { props: { lessons } };
};
