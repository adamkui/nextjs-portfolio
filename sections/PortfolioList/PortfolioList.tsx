import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";

import { PortfolioCard, Section, TextUnderline } from "components";
import { hobbyPortfolioItems, professionalPortfolioItems } from "data";
import { useGetText } from "hooks";

export const Portfolio: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <>
      <Section
        title={t("PORTFOLIO_TITLE_PROFESSIONAL")}
        className="flex flex-col w-full mt-20"
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
      </Section>
    </>
  );
};
