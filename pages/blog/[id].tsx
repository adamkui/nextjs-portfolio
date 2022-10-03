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
  const [articleData, setArticleData] = useState<FileData | undefined>();

  useEffect(() => {
    if (!router) return;

    try {
      const filesData = JSON.parse(localStorage.getItem("blogFilesData") || "");
      setArticleData(filesData[Number(router.query.id) - 1]);

      if (!filesData) {
        router.replace("/blog");
      }
    } catch (err) {
      router.replace("/blog");
    }
  }, [router]);

  return (
    <div>
      <main
        className={cn(
          "transition-all duration-200 ease-in-out mt-20 mb-12",
          classes.Main
        )}
      >
        {articleData ? (
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
        ) : null}
      </main>
    </div>
  );
};

export default BlogArticlePage;
