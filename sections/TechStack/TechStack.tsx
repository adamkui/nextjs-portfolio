import { Button, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Link from "next/link";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import {
  Section,
  TechStackCard,
  TechStackMoreInfoDialog,
  TextUnderline,
} from "components";
import { TechStackItemCategory, techStackItems } from "data";
import { useGetText } from "hooks";
import { sortBy } from "lodash";

export const TechStack: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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
          className={cn(
            "relative overflow-hidden self-center mb-20 mt-16 bg-clip-text text-transparent bg-gradient-to-r border-sky-600 group transition-all duration-200 ease-in-out",
            isDarkMode ? "from-sky-500 to-cyan-400" : "from-sky-600 to-cyan-500"
          )}
        >
          {t("TECH_STACK_PORTFOLIO_BUTTON_LABEL")}
          <span
            className={cn(
              "absolute w-0 h-0 transition-all duration-200 ease-out rounded-full group-hover:w-64 group-hover:h-32 opacity-5",
              isDarkMode ? "bg-white" : "bg-sky-500"
            )}
          ></span>
        </Button>
      </Link>
      <Grid container className="justify-center" gap={3}>
        {Object.values(TechStackItemCategory).map((ItemCategory) => {
          return sortBy(techStackItems, [(item) => item.title.toLowerCase()])
            .filter((item) => item.category === ItemCategory && item.icon)

            .map(({ title, icon, href }) => {
              return (
                <TechStackCard
                  key={title}
                  title={title}
                  icon={icon!}
                  isDarkMode={isDarkMode}
                  href={href}
                />
              );
            });
        })}
      </Grid>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="w-fit self-center group"
      >
        <Typography className="text-center mt-10" variant="subtitle1">
          {t("TECH_STACK_MORE")}
        </Typography>
        <TextUnderline bgColorClass="bg-gradient-to-r from-sky-600 to-cyan-500" />
      </button>
      <TechStackMoreInfoDialog
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </Section>
  );
};
