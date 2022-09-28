import { Typography } from "@mui/material";
import { FC } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

import { useGetText } from "hooks";
import { useSelector } from "react-redux";

export const ScrollUpButton: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <div
      className="w-full text-center flex flex-col items-center mb-10 cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <BsArrowUpCircle
        size={32}
        color={isDarkMode ? "white" : "black"}
        className={"animate-bounce"}
      />
      <Typography variant={"subtitle2"} className={"mt-2"}>
        {t("SCROLL_TO_TOP")}
      </Typography>
    </div>
  );
};
