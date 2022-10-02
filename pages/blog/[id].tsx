import {
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import { Section } from "components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FileData } from "models/blog.model";

const BlogArticlePage: NextPage = () => {
  const router = useRouter();
  const { filesData } = useSelector((state: ApplicationState) => state.blog);
  const [articleData, setArticleData] = useState<FileData | undefined>();

  useEffect(() => {
    // Wont have file data in case blog was not opened!
    console.log(filesData);
    const blogArticleId: number = Number(router.query.id);
    const fileData = filesData[blogArticleId - 1];
    setArticleData(fileData);
  }, []);

  return (
    <div>
      <main className="transition-all duration-200 ease-in-out min-h-screen h-full my-20">
        <Section
          title={articleData?.title || ""}
          body={<ReactMarkdown>{articleData?.content || ""}</ReactMarkdown>}
        />
      </main>
    </div>
  );
};

export default BlogArticlePage;
