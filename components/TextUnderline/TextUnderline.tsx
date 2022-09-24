import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

export const TextUnderline: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <span
      className={cn(
        "block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5",
        isDarkMode ? "bg-white" : "bg-black"
      )}
    />
  );
};
