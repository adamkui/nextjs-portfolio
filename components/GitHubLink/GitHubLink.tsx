import { Typography } from "@mui/material";
import { useGetText } from "hooks/useGetText";
import { FC } from "react";

import { TextUnderline } from "..";

export const GitHubLink: FC = () => {
  const t = useGetText();

  return (
    <a
      href="https://github.com/adamkui"
      target={"_black"}
      rel={"noreferrer"}
      className="w-fit self-center group"
    >
      <Typography className="text-center mt-10" variant="subtitle1">
        {t("PORTFOLIO_MORE_ON_GITHUB")}
      </Typography>
      <TextUnderline bgColorClass="bg-gradient-to-r from-sky-600 to-cyan-500" />
    </a>
  );
};
