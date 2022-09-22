import { Button, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";

import { techStackItems } from "data";
import { useGetText } from "hooks";
import { Section } from "../../components/Section/Section";
import { TechStackCard } from "../../components/TechStackCard/TechStackCard";

export const TechStack: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  return (
    <Section
      title={t("TECH_STACK_TITLE")}
      body={t("TECH_STACK_BODY")}
      className="flex flex-col mb-20"
    >
      <Link href="/portfolio">
        <Button
          variant="outlined"
          size="large"
          className={cn("self-center mb-20 mt-16", {
            "text-white border-white": isDarkMode,
          })}
        >
          {t("TECH_STACK_PORTFOLIO_BUTTON_LABEL")}
        </Button>
      </Link>
      <Grid container className="justify-center" gap={3}>
        {techStackItems.map(({ title, icon, href }) => {
          return (
            <TechStackCard
              key={title}
              title={title}
              icon={icon}
              isDarkMode={isDarkMode}
              href={href}
            />
          );
        })}
      </Grid>
      <Typography className="text-center mt-10" variant="subtitle1">
        {t("TECH_STACK_MORE")}
      </Typography>
    </Section>
  );
};
