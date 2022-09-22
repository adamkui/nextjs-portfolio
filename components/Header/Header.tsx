import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import { Logo } from "../Logo/Logo";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <nav
      className={cn(
        "z-50 flex w-full sticky top-0 justify-center backdrop-blur-lg ",
        isDarkMode ? "bg-slate-900 bg-opacity-50" : "bg-slate-200 bg-opacity-50"
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
