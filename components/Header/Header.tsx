import { FC } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import cn from "classnames";

import { NavigationItemProps } from "../../types/header.model";
import DarkModeSwitch from "./DarkModeSwitch";

const NAV_ITEMS: NavigationItemProps[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  {
    label: "GitHub",
    href: "https://github.com/adamkui",
    icon: <GitHubIcon />,
  },
];

export const Header: FC = () => {
  return (
    <nav
      className={cn(
        "flex w-full sticky justify-center bg-white bg-opacity-5 backdrop-blur-lg"
      )}
    >
      <ul className="flex w-full max-w-7xl justify-between items-center justify-self-center p-5">
        <li className="flex items-center">
          <TerminalIcon className="mr-2" />
          <h1 className="font-bold text-xl">Adam Kui</h1>
        </li>
        <li className="flex">
          {NAV_ITEMS.map(({ label, href, icon }) => {
            return (
              <div key={label} className="flex items-center mx-5">
                <div className="mr-2 flex">{icon}</div>
                <Link href={href}>{label}</Link>
              </div>
            );
          })}
        </li>
        <li>
          <DarkModeSwitch />
        </li>
      </ul>
    </nav>
  );
};
