import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import {
  ButtonWrapper,
  Section,
  TechStackCard,
  TechStackMoreInfoDialog,
  TextUnderline,
} from "components";
import { TechStackItemCategory, techStackItems } from "data";
import { useGetText } from "hooks";
import { sortBy } from "lodash";
import { useRouter } from "next/router";

export const TechStack: FC = () => {
  const router = useRouter();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Section
      title={t("TECH_STACK_TITLE")}
      body={t("TECH_STACK_BODY")}
      className="flex flex-col mb-20"
    >
      <ButtonWrapper
        label={t("TECH_STACK_PORTFOLIO_BUTTON_LABEL")}
        className={"mt-16 mb-20"}
        onClick={() => setModalOpen(true)}
      />
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
        onClick={() => router.push("/portfolio")}
        className="w-fit self-center group"
        role={"button"}
        aria-label={"More tech stack data"}
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
