import Link from "next/link";
import { FC } from "react";

import { NavigationProvider } from "../Constants/navigation";
import { LinksMenu } from "./LinksMenu";

export const Navigation: FC = () => {
  const { NAV_ITEMS } = NavigationProvider();

  return (
    <li className="hidden md:flex">
      {NAV_ITEMS.map(({ label, href, icon }) => {
        return (
          <div key={label} className="flex items-center mx-5">
            <Link href={href}>{label}</Link>
            <div className="mr-2 flex">{icon}</div>
          </div>
        );
      })}
      <LinksMenu />
    </li>
  );
};
