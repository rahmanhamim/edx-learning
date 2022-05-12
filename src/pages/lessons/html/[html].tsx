import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const HtmlLesson = () => {
  return <div>Html Lesson</div>;
};

export default HtmlLesson;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonkeeper.com/b/KDCQ");
  const courses = await res.json();

  // const paths = courses.map((blog: any) => ({
  //   params: { details: blog.id },
  // }));

  const data = [1, 2];

  const paths = data.map((ninja) => {
    return {
      params: { html: ninja.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch("https://jsonkeeper.com/b/KDCQ");
  // const courses = await res.json();

  // const course = courses.find(
  //   (blog: any) => blog.id.toString() === context.params?.details
  // );

  const id = context.params?.html;
  console.log(id);

  const course = { hello: "jello" };

  return { props: { course } };
};
