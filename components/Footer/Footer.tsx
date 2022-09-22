import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { useGetText } from "hooks";

export const Footer: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  return (
    <footer
      className={cn(
        "py-5 flex justify-center text-center text-sm bg-opacity-50",
        isDarkMode ? "bg-slate-900" : "bg-slate-200"
      )}
    >
      {t("FOOTER_COPYRIGHT")}
    </footer>
  );
};
