import { FC } from "react";

import { useGetText } from "hooks";

export const Footer: FC = () => {
  const t = useGetText();

  return (
    <footer
      className={
        "py-5 flex justify-center text-center text-sm bg-opacity-50 bg-slate-200 dark:bg-slate-900"
      }
    >
      {t("FOOTER_COPYRIGHT")}
    </footer>
  );
};
