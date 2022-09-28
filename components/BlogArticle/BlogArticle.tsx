import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const BlogArticle: FC = () => {
  const [tosText, setTosText] = useState("");

  useEffect(() => {
    fetch("/blog/test.md")
      .then((res) => res.text())
      .then((text) => setTosText(text));
  });

  return <ReactMarkdown>{tosText}</ReactMarkdown>;
};
