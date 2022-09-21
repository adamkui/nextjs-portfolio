import { FC } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

export const Footer: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <footer
      className={cn(
        "py-5 flex justify-center text-center text-sm bg-opacity-50",
        isDarkMode ? "bg-slate-900" : "bg-slate-200"
      )}
    >
      Copyright © 2022 Adam Kui. All Rights Reserved.
    </footer>
  );
};
