import { Button } from "@mui/material";
import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

interface ButtonWrapperProps {
  label: string;
  className?: string;
  onClick?: VoidFunction;
}

export const ButtonWrapper: FC<ButtonWrapperProps> = ({
  label,
  className,
  onClick,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <Button
      variant="outlined"
      size="large"
      className={cn(
        "relative overflow-hidden self-center bg-clip-text text-transparent bg-gradient-to-r border-sky-600 group transition-all duration-200 ease-in-out",
        isDarkMode ? "from-sky-500 to-cyan-400" : "from-sky-600 to-cyan-500",
        className
      )}
      onClick={onClick}
    >
      {label}
      <span
        className={cn(
          "absolute w-0 h-0 transition-all duration-200 ease-out rounded-full group-hover:w-64 group-hover:h-32 opacity-5",
          isDarkMode ? "bg-white" : "bg-sky-500"
        )}
      />
    </Button>
  );
};
