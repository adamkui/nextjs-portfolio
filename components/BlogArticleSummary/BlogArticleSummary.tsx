import { truncate } from "lodash";
import { FC, ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MdOutlineNavigateNext } from "react-icons/md";

import { Section } from "..";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useGetText } from "hooks/useGetText";

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
  const t = useGetText();

  const [markdownElement, setMarkdownElement] = useState<ReactElement | null>(
    null
  );

  useEffect(() => {
    const href = `/blog/${id}`;
    setMarkdownElement(
      <Section
        title={title}
        titleHref={href}
        fullWidth
        body={
          <>
            <ReactMarkdown>
              {truncate(markdownText, { length: 250 })}
            </ReactMarkdown>
            <br />
            <Link href={`/blog/${id}`}>
              <Typography
                className={"font-semibold flex items-center cursor-pointer"}
              >
                {t("READ_ARTICLE")}
                <MdOutlineNavigateNext size={16} className={"ml-0.5"} />
              </Typography>
            </Link>
          </>
        }
      />
    );
  }, []);

  return markdownElement;
};
