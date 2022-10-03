import { isEmpty } from "lodash";
import { GetStaticPropsResult, InferGetStaticPropsType, NextPage } from "next";

import { BlogNoArticles, HeaderVideo, PaginatedBlogArticles } from "components";
import { BlogArticlesResponse, BlogPageProps, FileData } from "models";
import { useEffect } from "react";

const CMS_BLOG_ARTICLES_URL = `https://${process.env.CLOUDINARY_API_CLIENT}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/disyx1lwa/resources/search?max_results=500&expression=folder:nextjs-portfolio/*`;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<BlogPageProps>
> => {
  const { resources }: BlogArticlesResponse = await fetch(
    CMS_BLOG_ARTICLES_URL
  ).then((res) => res.json());

  const filesData: FileData[] = await Promise.all(
    resources.map(async ({ filename, url }, index) => {
      return {
        title: filename.replace(".md", ""),
        content: await fetch(url).then((res) => res.text()),
        id: index + 1,
      };
    })
  );

  return {
    props: {
      filesData,
    },
  };
};

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  filesData,
}) => {
  useEffect(() => {
    try {
      localStorage.setItem("blogFilesData", JSON.stringify(filesData));
    } catch (err) {
      // Don't do anything
    }
  }, []);

  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <HeaderVideo
          src=""
          srcOnMobile=""
          poster="/assets/images/code.webp"
          stringsToType={["Blog."]}
          loop={false}
        />
        {!isEmpty(filesData) ? (
          <PaginatedBlogArticles filesData={filesData} />
        ) : (
          <BlogNoArticles />
        )}
      </main>
    </div>
  );
};

export default BlogPage;
