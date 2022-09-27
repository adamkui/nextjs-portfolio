import { PaperProps } from "@mui/material";
import { ImageSize } from "models";

import { texts } from ".";

type PortfolioItemButtonProps = {
    label: string;
    href: string
}

export interface PortfolioItemProps {
  titleTrlKey: keyof typeof texts;
  descriptionTrlKey: keyof typeof texts;
  imageSrc: string;
  imageSize: ImageSize;
  chipContent: string[];
  buttonProps?: PortfolioItemButtonProps
}

export const professionalPortfolioItems: PortfolioItemProps[] = [
  {
    titleTrlKey: "PORTFOLIO_GEORGE_STORE_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_STORE_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: {label: "More information", href: "https://www.georgestore.hu/"}
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_ADMIN_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_ADMIN_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_MICROSITES_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_MICROSITES_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
];

export const hobbyPortfolioItems: PortfolioItemProps[] = [
  {
    titleTrlKey: "PORTFOLIO_PAL_GOLLNER_TITLE",
    descriptionTrlKey: "PORTFOLIO_PAL_GOLLNER_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
  {
    titleTrlKey: "PORTFOLIO_COVID_DASHBOARD_TITLE",
    descriptionTrlKey: "PORTFOLIO_COVID_DASHBOARD_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
  {
    titleTrlKey: "PORTFOLIO_NOTES_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_NOTES_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
  {
    titleTrlKey: "PORTFOLIO_MUSIC_PLAYER_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_MUSIC_PLAYER_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
  {
    titleTrlKey: "PORTFOLIO_BEAT_MAKER_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_BEAT_MAKER_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"]
  },
];
