import cn from "classnames";
import { FC } from "react";

interface TextUnderlineProps {
  bgColorClass?: string;
}

export const TextUnderline: FC<TextUnderlineProps> = ({ bgColorClass }) => {
  return (
    <span
      className={cn(
        "block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5",
        bgColorClass ?? "bg-black dark:bg-white"
      )}
    />
  );
};
