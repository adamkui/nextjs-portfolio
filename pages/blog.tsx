import { Typography } from "@mui/material";
import { NextPage } from "next";
import { RiArticleLine } from "react-icons/ri";

import { useGetText } from "hooks";
import { useSelector } from "react-redux";

const BlogPage: NextPage = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <RiArticleLine size={80} color={isDarkMode ? "white" : "black"} />
      <Typography variant={"h6"} className={"mt-7"}>
        {t("BLOG_NO_POSTS")}
      </Typography>
    </div>
  );
};

export default BlogPage;
