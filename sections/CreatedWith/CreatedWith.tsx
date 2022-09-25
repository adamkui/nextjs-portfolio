import { Typography } from "@mui/material";
import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { Section, TextUnderline } from "components";
import { useGetText } from "hooks";

export const CreatedWith: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <Section
      title={t("CREATED_WITH_TITLE")}
      className="flex flex-col w-full mb-20"
    >
      <div
        className={cn(
          "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-3 py-2 mt-3",
          isDarkMode
            ? " bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        {t("CREATED_WITH_BODY")}
        <div className="flex">
          <Typography variant="body1">{t("CREATED_WITH_BODY_2")}</Typography>
          <a
            href="https://github.com/adamkui/nextjs-portfolio"
            target={"_blank"}
            rel={"noreferrer"}
            className="w-fit group"
          >
            <Typography variant="body1" className="ml-1">
              {"here."}
            </Typography>
            <TextUnderline />
          </a>
        </div>
        <br />
        <div className="flex">
          <Typography variant="body1">{t("CREATED_WITH_BODY_3")}</Typography>
          <a
            href="https://www.instagram.com/domikui/"
            target={"_blank"}
            rel={"noreferrer"}
            className="w-fit group"
          >
            <Typography variant="body1" className="ml-1">
              {"@domikui"}
            </Typography>
            <TextUnderline />
          </a>
        </div>
      </div>
    </Section>
  );
};
