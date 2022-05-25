import LessonVideo from "components/lessons/LessonVideo";
import { Course, ModuleContent } from "datatypes/coursetypes";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/reducers";

interface Props {
  lessons: ModuleContent[];
  courses: Course[];
}

const VideoLesson = ({ lessons, courses }: Props) => {
  const isCoursesExist = useSelector(
    (state: State) => state.courses.courseData[0]
  );
  const dispatch = useDispatch();

  if (!isCoursesExist) {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses,
    });
  }

  const isVideolLessonsExist = useSelector(
    (state: State) => state.courses.videoLessons
  );
  if (isVideolLessonsExist.length == 0) {
    dispatch({
      type: "VIDEO_LESSON_FETCH",
      payload: lessons,
    });
  }

  return <LessonVideo />;
};

export default VideoLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
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
  const res = await fetch("https://jsonkeeper.com/b/4S3V");
  const courses: Course[] = await res.json();

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

  return { props: { lessons, courses } };
};
