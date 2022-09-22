import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useSelector } from "react-redux";

import { navigationItems } from "data";
import { LinksMenu } from "../LinksMenu/LinksMenu";

export const Navigation: FC = () => {
  const { pathname } = useRouter();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <li className="hidden md:flex">
      {navigationItems.map(({ label, href }) => {
        return (
          <div
            key={label}
            className={cn(
              "px-3 mx-2",
              pathname === href
                ? `${
                    isDarkMode ? "bg-white" : "bg-black"
                  } bg-opacity-10 backdrop-blur-lg rounded-md`
                : `bg-transparent transition-all duration-200 ease-in-out ${
                    isDarkMode ? "text-white" : "text-black"
                  }`
            )}
          >
            <Link href={href}>{label}</Link>
          </div>
        );
      })}
      <LinksMenu />
    </li>
  );
};
