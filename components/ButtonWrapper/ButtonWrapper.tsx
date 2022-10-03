import { Button } from "@mui/material";
import cn from "classnames";
import { FC } from "react";

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
  return (
    <Button
      variant="outlined"
      size="large"
      className={cn(
        "relative overflow-hidden self-center bg-clip-text text-transparent bg-gradient-to-r border-sky-600 group transition-all duration-200 ease-in-out from-sky-600 to-cyan-500 dark:from-sky-500 dark:to-cyan-400",
        className
      )}
      onClick={onClick}
    >
      {label}
      <span
        className={
          "absolute w-0 h-0 transition-all duration-200 ease-out rounded-full group-hover:w-64 group-hover:h-32 opacity-5 bg-sky-500 dark:bg-white"
        }
      />
    </Button>
  );
};
