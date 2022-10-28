import { Grid, Typography } from "@mui/material";
import { FC } from "react";

import { GitHubLink, PortfolioCard, Section, TextUnderline } from "components";
import { hobbyPortfolioItems, professionalPortfolioItems } from "data";
import { useGetText } from "hooks/useGetText";
import { useSelector } from "react-redux";

export const PortfolioGrid: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <>
      <Section
        title={t("PORTFOLIO_TITLE_PROFESSIONAL")}
        className="flex flex-col w-full mt-10"
      >
        <Grid container spacing={3} className={"justify-center"}>
          {professionalPortfolioItems.map((itemProps) => {
            return (
              <PortfolioCard
                {...itemProps}
                isDarkMode={isDarkMode}
                key={itemProps.titleTrlKey}
              />
            );
          })}
        </Grid>
      </Section>
      <Section
        title={t("PORTFOLIO_TITLE_HOBBY_PROJECTS")}
        className="flex flex-col w-full my-20"
      >
        <Grid container spacing={3} className={"justify-center"}>
          {hobbyPortfolioItems.map((itemProps) => {
            return (
              <PortfolioCard
                {...itemProps}
                isDarkMode={isDarkMode}
                key={itemProps.titleTrlKey}
              />
            );
          })}
        </Grid>
        <GitHubLink />
      </Section>
    </>
  );
};
