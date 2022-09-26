import { FC } from "react";

import { PortfolioCard, Section } from "components";
import { useGetText } from "hooks";
import { Grid } from "@mui/material";

export const Portfolio: FC = () => {
  const t = useGetText();

  return (
    <>
      <Section
        title={t("PORTFOLIO_TITLE_PROFESSIONAL")}
        className="flex flex-col w-full my-20"
      >
        <Grid container>
          <Grid item xs={6}>
            <PortfolioCard />
          </Grid>
        </Grid>
      </Section>
      <Section
        title={t("PORTFOLIO_TITLE_HOBBY_PROJECTS")}
        className="flex flex-col w-full my-20"
      ></Section>
    </>
  );
};
