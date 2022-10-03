import cn from "classnames";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

import { ButtonWrapper, Section } from "components";
import { useGetText } from "hooks";
import { FileData } from "models/blog.model";
import classes from "./BlogArticlePage.module.css";

const BlogArticlePage: NextPage = () => {
  const t = useGetText();
  const router = useRouter();
  const { filesData } = useSelector((state: ApplicationState) => state.blog);
  const [articleData, setArticleData] = useState<FileData | undefined>();

  useEffect(() => {
    // Wont have file data in case blog was not opened!
    const blogArticleId: number = Number(router.query.id);
    const fileData = filesData[blogArticleId - 1];
    setArticleData(fileData);
  }, []);

  return (
    <div>
      <main
        className={cn(
          "transition-all duration-200 ease-in-out mt-20 mb-12",
          classes.Main
        )}
      >
        <Section
          title={articleData?.title || ""}
          body={<ReactMarkdown>{articleData?.content || ""}</ReactMarkdown>}
          className={"w-full"}
        >
          <div className={"flex justify-center"}>
            <Link href="/blog">
              <ButtonWrapper label={t("BACK")} className={"mt-12"} />
            </Link>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default BlogArticlePage;
