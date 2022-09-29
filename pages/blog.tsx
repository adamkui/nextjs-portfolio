import { isEmpty } from "lodash";
import { GetStaticPropsResult, InferGetStaticPropsType, NextPage } from "next";

import { BlogArticleSummary, BlogNoArticles, HeaderVideo } from "components";
import { Grid } from "@mui/material";
import { texts } from "data/index";
import { useGetText } from "hooks/useGetText";

type BlogPageProps = {
  filesData: FileData[];
};

type FileData = {
  title: string;
  content: string;
};

type BlogArticlesResponse = {
  total_count: number;
  time: number;
  resources: BlogArticleResource[];
};

type BlogArticleResource = {
  filename: string;
  url: string;
};

const CMS_BLOG_ARTICLES_URL = `https://${process.env.CLOUDINARY_API_CLIENT}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/disyx1lwa/resources/search?max_results=500&expression=folder:nextjs-portfolio/*`;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<BlogPageProps>
> => {
  const { resources }: BlogArticlesResponse = await fetch(
    CMS_BLOG_ARTICLES_URL
  ).then((res) => res.json());

  const filesData: FileData[] = await Promise.all(
    resources.map(async ({ filename, url }) => {
      return {
        title: filename.replace(".md", ""),
        content: await fetch(url).then((res) => res.text()),
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
  const t = useGetText();

  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <HeaderVideo
          src="/assets/videos/about_720_m.mp4"
          srcOnMobile="/assets/videos/about_540_m.mp4"
          poster="/assets/images/about_poster.webp"
          stringsToType={[1, 2, 3, 4].map((i) => {
            return t(`WELCOME_TEXT_${i}` as keyof typeof texts);
          })}
          loop
        />
        {!isEmpty(filesData) ? (
          <Grid container spacing={10} className={"w-full my-0 relative"}>
            {filesData.map(({ title, content }) => {
              return (
                <Grid item xs={12} key={title}>
                  <BlogArticleSummary title={title} markdownText={content} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <BlogNoArticles />
        )}
      </main>
    </div>
  );
};

export default BlogPage;
