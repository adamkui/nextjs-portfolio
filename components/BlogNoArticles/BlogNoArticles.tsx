import { Typography } from "@mui/material";
import { useGetText } from "hooks/useGetText";
import { FC } from "react";
import { RiArticleLine } from "react-icons/ri";
import { useSelector } from "react-redux";

export const BlogNoArticles: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <>
      <RiArticleLine size={80} color={isDarkMode ? "white" : "black"} />
      <Typography variant={"h6"} className={"mt-7"}>
        {t("BLOG_NO_POSTS")}
      </Typography>
    </>
  );
};
