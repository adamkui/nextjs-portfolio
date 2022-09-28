import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const BlogArticle: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <ReactMarkdown>{props.markdownText}</ReactMarkdown>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const test = await fetch("/blog/test.md");
  const text = await test.text();

  return {
    props: {
      markdownText: "test",
    },
  };
};
