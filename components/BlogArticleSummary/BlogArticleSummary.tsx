import { truncate } from "lodash";
import { FC, ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { Section } from "..";

interface BlogArticleSummaryProps {
  title: string;
  markdownText: string;
  id: number;
}

export const BlogArticleSummary: FC<BlogArticleSummaryProps> = ({
  title,
  markdownText,
  id,
}) => {
  const [markdownElement, setMarkdownElement] = useState<ReactElement | null>(
    null
  );

  useEffect(() => {
    setMarkdownElement(
      <Section
        title={title}
        titleHref={`/blog/${id}`}
        fullWidth
        body={
          <ReactMarkdown>
            {truncate(markdownText, { length: 250 })}
          </ReactMarkdown>
        }
      />
    );
  }, []);

  return markdownElement;
};
