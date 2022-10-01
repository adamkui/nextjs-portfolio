import { Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

import { Section, TextUnderline } from "components";
import { useGetText } from "hooks";
import { ReactElement } from "react-markdown/lib/react-markdown";

export const CreatedWith: FC = () => {
  const t = useGetText();

  const [body, setBody] = useState<ReactElement>();

  useEffect(() => {
    setBody(
      <>
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
      </>
    );
  }, []);

  return (
    <Section
      title={t("CREATED_WITH_TITLE")}
      className="flex flex-col w-full mb-20"
      fullWidth
      body={body}
    />
  );
};
