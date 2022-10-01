import { NextPage } from "next";
import { useRouter } from "next/router";

import { Section } from "components";
import { useGetText } from "hooks";

const BlogArticlePage: NextPage = () => {
  const t = useGetText();
  const router = useRouter();

  const blogArticleId = router.query.id;

  console.log(blogArticleId);

  return <Section title={t("ABOUT_ME_BODY_1")} body={"asdasdadads"}></Section>;
};

export default BlogArticlePage;
