import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import { navigationItems } from "data";
import { LinksMenu } from "../LinksMenu/LinksMenu";

export const Navigation: FC = () => {
  const { pathname } = useRouter();

  return (
    <li className="hidden md:flex">
      {navigationItems.map(({ label, href }) => {
        return (
          <div
            key={label}
            className={cn(
              "px-3 mx-2",
              pathname === href || (href !== "/" && pathname.includes(href))
                ? "bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 backdrop-blur-lg rounded-md"
                : "bg-transparent transition-all duration-200 ease-in-out text-black dark:text-white"
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
