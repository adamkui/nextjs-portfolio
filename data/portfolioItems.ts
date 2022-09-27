import { PaperProps } from "@mui/material";
import { ImageSize } from "models";

import { texts } from "data";

type PortfolioItemButtonProps = {
  label?: keyof typeof texts;
  href: string;
};

export interface PortfolioItemProps {
  titleTrlKey: keyof typeof texts;
  descriptionTrlKey: keyof typeof texts;
  imageSrc: string;
  imageSize: ImageSize;
  chipContent: string[];
  buttonProps?: PortfolioItemButtonProps;
}

export const professionalPortfolioItems: PortfolioItemProps[] = [
  {
    titleTrlKey: "PORTFOLIO_GEORGE_STORE_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_STORE_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "TypeScript", "NodeJs"],
    buttonProps: {
      label: "PORTFOLIO_MORE_INFORMATION",
      href: "https://www.georgestore.hu/",
    },
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_ADMIN_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_ADMIN_DESCRIPTION",
    imageSrc: "/george.webp",
    imageSize: { width: 512, height: 512 },
    chipContent: ["React", "TypeScript", "NodeJs"],
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_MICROSITES_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_MICROSITES_DESCRIPTION",
    imageSrc: "/george_microsites.webp",
    imageSize: { width: 1156, height: 777 },
    chipContent: ["React", "TypeScript"],
  },
];

export const hobbyPortfolioItems: PortfolioItemProps[] = [
  {
    titleTrlKey: "PORTFOLIO_PAL_GOLLNER_TITLE",
    descriptionTrlKey: "PORTFOLIO_PAL_GOLLNER_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://www.palgollner.hu/" },
  },
  {
    titleTrlKey: "PORTFOLIO_COVID_DASHBOARD_TITLE",
    descriptionTrlKey: "PORTFOLIO_COVID_DASHBOARD_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://global-covid-dashboard.netlify.app/" },
  },
  {
    titleTrlKey: "PORTFOLIO_NOTES_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_NOTES_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://notesapphu.netlify.app/"}
  },
  {
    titleTrlKey: "PORTFOLIO_MUSIC_PLAYER_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_MUSIC_PLAYER_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: {href: "https://ak-react-music-player.netlify.app/"}
  },
  {
    titleTrlKey: "PORTFOLIO_BEAT_MAKER_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_BEAT_MAKER_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: {href: "https://beatmaker-ak.netlify.app/"}
  },
  {
    titleTrlKey: "PORTFOLIO_COLORS_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_COLORS_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: {href: "https://colors-page.netlify.app/"}
  },
  {
    titleTrlKey: "PORTFOLIO_PHOTO_SEARCH_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_PHOTO_SEARCH_APP_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["React", "NodeJs"],
    buttonProps: {href: "https://photon-project-ak.netlify.app/"}
  },
  {
    titleTrlKey: "PORTFOLIO_DISCORD_CHATBOT_TITLE",
    descriptionTrlKey: "PORTFOLIO_DISCORD_CHATBOT_DESCRIPTION",
    imageSrc: "/george_store.webp",
    imageSize: { width: 1350, height: 924 },
    chipContent: ["Discord.JS", "JavaScript", "Chromium", "MongoDB", "Puppeteer"],
    buttonProps: {label: "PORTFOLIO_VISIT_GITHUB", href: "https://github.com/adamkui/discord-bot-gta-online-news"}
  },
];
