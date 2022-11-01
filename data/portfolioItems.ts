import { texts } from "data";

type PortfolioItemButtonProps = {
  label?: keyof typeof texts;
  href: string;
};

export interface PortfolioItemProps {
  titleTrlKey: keyof typeof texts;
  descriptionTrlKey: keyof typeof texts;
  imageSrc: string;
  chipContent: string[];
  buttonProps?: PortfolioItemButtonProps;
}

export const professionalPortfolioItems: PortfolioItemProps[] = [
  {
    titleTrlKey: "PORTFOLIO_GEORGE_STORE_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_STORE_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/george_store.webp",
    chipContent: ["React", "TypeScript", "Bootstrap", "NodeJs"],
    buttonProps: {
      label: "PORTFOLIO_MORE_INFORMATION",
      href: "https://www.georgestore.hu/",
    },
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_ADMIN_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_ADMIN_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/george_admin.webp",
    chipContent: ["React", "TypeScript", "Bootstrap", "NodeJs"],
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_MICROSITES_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_MICROSITES_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/george_microsites.webp",
    chipContent: ["React", "TypeScript", "Bootstrap"],
  },
  {
    titleTrlKey: "PORTFOLIO_GEORGE_MOCK_BACKEND_TITLE",
    descriptionTrlKey: "PORTFOLIO_GEORGE_MOCK_BACKEND_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/george_store_2.webp",
    chipContent: ["NodeJS", "ExpressJS"],
  },
];

export const hobbyPortfolioItems: PortfolioItemProps[] = [
  {
    titleTrlKey: "PORTFOLIO_REACT_BREAKPOINT_UTILS_TITLE",
    descriptionTrlKey: "PORTFOLIO_REACT_BREAKPOINT_UTILS_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/react_breakpoint_utils.webp",
    chipContent: ["React", "JavaScript", "Npmjs", "Lodash"],
    buttonProps: {
      href: "https://www.npmjs.com/package/react-breakpoint-utils",
      label: "PORTFOLIO_VISIT_NPMJS",
    },
  },
  {
    titleTrlKey: "PORTFOLIO_PAL_GOLLNER_TITLE",
    descriptionTrlKey: "PORTFOLIO_PAL_GOLLNER_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/pal_gollner.webp",
    chipContent: [
      "React",
      "TypeScript",
      "NodeJs",
      "Material UI",
      "Framer Motion",
      "TailwindCSS",
      "Axios",
      "Cloudinary",
    ],
    buttonProps: { href: "https://www.palgollner.hu/" },
  },
  {
    titleTrlKey: "PORTFOLIO_EGRIAPARTMAN_TITLE",
    descriptionTrlKey: "PORTFOLIO_EGRIAPARTMAN_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/egriapartman.webp",
    chipContent: [
      "React",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
      "Styled Components",
    ],
    buttonProps: { href: "https://www.egriapartman.hu/" },
  },
  {
    titleTrlKey: "PORTFOLIO_NOTES_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_NOTES_APP_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/notes.webp",
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://notesapphu.netlify.app/" },
  },
  {
    titleTrlKey: "PORTFOLIO_MUSIC_PLAYER_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_MUSIC_PLAYER_APP_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/music_player.webp",
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://ak-react-music-player.netlify.app/" },
  },
  {
    titleTrlKey: "PORTFOLIO_BEAT_MAKER_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_BEAT_MAKER_APP_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/beat_maker.webp",
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://beatmaker-ak.netlify.app/" },
  },
  {
    titleTrlKey: "PORTFOLIO_COLORS_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_COLORS_APP_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/colors.webp",
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://colors-page.netlify.app/" },
  },
  {
    titleTrlKey: "PORTFOLIO_OLD_PORTFOLIO_TITLE",
    descriptionTrlKey: "PORTFOLIO_OLD_PORTFOLIO_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/old_portfolio.webp",
    chipContent: ["React", "Framer Motion"],
    buttonProps: { href: "https://adam-kui-portfolio.netlify.app" },
  },
  {
    titleTrlKey: "PORTFOLIO_PHOTO_SEARCH_APP_TITLE",
    descriptionTrlKey: "PORTFOLIO_PHOTO_SEARCH_APP_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/photo_search.webp",
    chipContent: ["React", "NodeJs"],
    buttonProps: { href: "https://photon-project-ak.netlify.app/" },
  },
  {
    titleTrlKey: "PORTFOLIO_DISCORD_CHATBOT_TITLE",
    descriptionTrlKey: "PORTFOLIO_DISCORD_CHATBOT_DESCRIPTION",
    imageSrc: "/assets/images/portfolio/discord.webp",
    chipContent: [
      "Discord.JS",
      "JavaScript",
      "Chromium",
      "MongoDB",
      "Puppeteer",
    ],
    buttonProps: {
      label: "PORTFOLIO_VISIT_GITHUB",
      href: "https://github.com/adamkui/discord-bot-gta-online-news",
    },
  },
];
