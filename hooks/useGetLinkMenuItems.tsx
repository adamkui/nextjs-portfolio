import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactElement } from "react";
import { FaNpm } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { SiCodersrank } from "react-icons/si";
import { useSelector } from "react-redux";

import { useGetText } from "./useGetText";

export interface LinkMenuItemProps {
  icon: ReactElement<any, any>;
  label: string;
  href: string;
}

export const useGetLinkMenuItems = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  const getLinkMenuItems = () => {
    const linkMenuItems: LinkMenuItemProps[] = [
      {
        icon: (
          <GitHubIcon
            sx={{ fontSize: 26 }}
            htmlColor={isDarkMode ? "white" : "black"}
          />
        ),
        label: t("LINK_MENU_GITHUB"),
        href: "https://github.com/adamkui",
      },
      {
        icon: <FaNpm size={26} color={isDarkMode ? "white" : "#ea1f39"} />,
        label: t("LINK_MENU_NPMJS"),
        href: "https://www.npmjs.com/~adamkui",
      },
      {
        icon: (
          <SiCodersrank size={26} color={isDarkMode ? "white" : "#50B0BA"} />
        ),
        label: t("LINK_MENU_CODERSRANK"),
        href: "https://profile.codersrank.io/user/adamkui",
      },
      {
        icon: (
          <LinkedInIcon
            sx={{ fontSize: 26 }}
            htmlColor={isDarkMode ? "white" : "#0e76a8"}
          />
        ),
        label: t("LINK_MENU_LINKEDIN"),
        href: "https://linkedin.com/in/adamkui",
      },
      {
        icon: <HiLink size={26} color={isDarkMode ? "white" : "#b62911"} />,
        label: t("LINK_MENU_LINKTREE"),
        href: "https://linktree.adamkui.hu/",
      },
    ];

    return linkMenuItems;
  };

  const linkMenuItems = getLinkMenuItems();

  return linkMenuItems;
};
