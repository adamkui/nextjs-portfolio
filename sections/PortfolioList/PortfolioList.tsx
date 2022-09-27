import { FC } from "react";

import { PortfolioCard, Section } from "components";
import { useGetText } from "hooks";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

export const Portfolio: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <>
      <Section
        title={t("PORTFOLIO_TITLE_PROFESSIONAL")}
        className="flex flex-col w-full my-20"
      >
        <Grid container gap={0} className="w-full justify-center">
          <PortfolioCard
            isDarkMode={isDarkMode}
            title={t("GOT_IT")}
            description={t("GOT_IT")}
          />
          <PortfolioCard
            isDarkMode={isDarkMode}
            title={t("GOT_IT")}
            description={t("GOT_IT")}
          />
        </Grid>
      </Section>
      <Section
        title={t("PORTFOLIO_TITLE_HOBBY_PROJECTS")}
        className="flex flex-col w-full my-20"
      ></Section>
    </>
  );
};
