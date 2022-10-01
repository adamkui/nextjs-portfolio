import { truncate } from "lodash";
import Link from "next/link";
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
    // Wait for component mount to prevent hydration error
    setMarkdownElement(
      <Section
        title={title}
        fullWidth
        body={
          <div>
            <ReactMarkdown>
              {truncate(markdownText, { length: 250 })}
            </ReactMarkdown>
            <br />
            <Link href={`/blog/${id}`}>{"See more"}</Link>
          </div>
        }
      />
    );
  }, []);

  return markdownElement;
};
