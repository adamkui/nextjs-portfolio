import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

interface TextUnderlineProps {
  bgColorClass?: string;
}

export const TextUnderline: FC<TextUnderlineProps> = ({ bgColorClass }) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  const defaultBgColor = isDarkMode ? "bg-white" : "bg-black";

  return (
    <span
      className={cn(
        "block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5",
        bgColorClass ?? defaultBgColor
      )}
    />
  );
};
