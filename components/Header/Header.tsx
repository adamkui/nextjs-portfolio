import cn from "classnames";
import { FC } from "react";

import { DarkModeSwitch } from "./HeaderComponents/DarkModeSwitch";
import { Logo } from "./HeaderComponents/Logo";
import { MobileNavigation } from "./HeaderComponents/MobileNavigation";
import { Navigation } from "./HeaderComponents/Navigation";

export const Header: FC = () => {
  return (
    <nav
      className={cn(
        "flex w-full sticky justify-center bg-white bg-opacity-5 backdrop-blur-lg"
      )}
    >
      <ul className="flex w-full max-w-7xl justify-between items-center justify-self-center p-5">
        <Logo />
        <Navigation />
        <div className="flex items-center">
          <DarkModeSwitch />
          <MobileNavigation />
        </div>
      </ul>
    </nav>
  );
};
