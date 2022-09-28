import { Typography } from "@mui/material";
import { FC } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

import { useGetText } from "hooks";

export const ScrollUpButton: FC = () => {
  const t = useGetText();

  return (
    <div
      className="w-full text-center flex flex-col items-center mb-10 cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <BsArrowUpCircle size={32} color={"white"} className={"animate-bounce"} />
      <Typography variant={"subtitle2"} className={"mt-3"}>
        {t("SCROLL_TO_TOP")}
      </Typography>
    </div>
  );
};
