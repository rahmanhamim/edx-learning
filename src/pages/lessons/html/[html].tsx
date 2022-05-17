import LessonHtml from "components/lessons/LessonHtml";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ModuleContent } from "../../../datatypes/coursetypes";

interface Props {
  lesson: ModuleContent;
}

const HtmlLesson = ({ lesson }: Props) => {
  return <LessonHtml lesson={lesson} />;
};

export default HtmlLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/KDCQ");
  const courses = await res.json();

  const htmlCourse: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "html") {
        htmlCourse?.push(lesson);
      }
    });
  });

  const paths = htmlCourse.map((lesson: any) => ({
    params: { html: lesson.id },
  }));

  // const data = ["1", "2"];
  // const paths = data.map((id) => {
  //   return {
  //     params: { html: id },
  //   };
  // });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/KDCQ");
  const courses = await res.json();

  const htmlCourse: any = [];

  courses[0]?.modules?.forEach((course: any) => {
    course?.moduleContent?.forEach((lesson: any) => {
      if (lesson?.type === "html") {
        htmlCourse?.push(lesson);
      }
    });
  });

  const courseData = htmlCourse.find(
    (lesson: any) => lesson.id.toString() === context.params?.html
  );

  // const id = context.params?.html;
  // console.log(id);

  const lesson = courseData;

  return { props: { lesson } };
};
