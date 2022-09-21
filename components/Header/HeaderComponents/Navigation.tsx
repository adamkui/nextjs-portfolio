import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import cn from "classnames";

import { NavigationProvider } from "../Constants/navigation";
import { LinksMenu } from "./LinksMenu";
import { useSelector } from "react-redux";

export const Navigation: FC = () => {
  const { NAV_ITEMS } = NavigationProvider();
  const { pathname } = useRouter();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  const getLinkClassNames = () => {
    return `${
      isDarkMode ? "bg-white" : "bg-black"
    } bg-opacity-10 backdrop-blur-lg rounded-md`;
  };

  return (
    <li className="hidden md:flex">
      {NAV_ITEMS.map(({ label, href }) => {
        return (
          <div
            key={label}
            className={cn(
              "px-3 mx-2",
              pathname === href
                ? getLinkClassNames()
                : `bg-transparent transition-all duration-200 ease-linear ${
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
