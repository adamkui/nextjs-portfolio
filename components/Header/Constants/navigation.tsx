import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector } from "react-redux";

import {
  MenuItemProps,
  NavigationItemProps,
} from "../../../types/header.model";

export const NavigationProvider = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  const NAV_ITEMS: NavigationItemProps[] = [
    { label: "About", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ];

  const LINKS_MENU_ITEMS: MenuItemProps[] = [
    {
      icon: (
        <GitHubIcon
          sx={{ fontSize: 26 }}
          htmlColor={isDarkMode ? "white" : "black"}
        />
      ),
      label: "GitHub",
      href: "https://github.com/adamkui",
    },
    {
      icon: (
        <LinkedInIcon
          sx={{ fontSize: 26 }}
          htmlColor={isDarkMode ? "white" : "#0e76a8"}
        />
      ),
      label: "LinkedIn",
      href: "https://linkedin.com/in/adamkui",
    },
    {
      icon: (
        <CodeIcon
          sx={{ fontSize: 26 }}
          htmlColor={isDarkMode ? "white" : "#50B0BA"}
        />
      ),
      label: "CodersRank",
      href: "https://codersrank.com/in/adamkui",
    },
  ];

  return { NAV_ITEMS, LINKS_MENU_ITEMS };
};
