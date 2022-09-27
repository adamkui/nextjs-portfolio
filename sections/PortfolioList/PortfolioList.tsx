import { Grid } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";

import { PortfolioCard, Section } from "components";
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
        <Grid container spacing={2}>
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
        <Grid container spacing={2} className="">
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
      </Section>
    </>
  );
};
