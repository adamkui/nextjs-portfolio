import { CircularProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import cn from "classnames";

interface AppLoaderProps {
  isLoading: boolean;
}

export const AppLoader: FC<AppLoaderProps> = ({ isLoading }) => {
  const [display, setDisplay] = useState<string>("hidden");

  useEffect(() => {
    if (isLoading) {
      setDisplay("flex");
    } else {
      setTimeout(() => {
        setDisplay("hidden");
      }, 150);
    }
  }, [isLoading]);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 items-center justify-center h-full w-full transition-opacity duration-150 ease-in-out bg-white dark:bg-slate-800",
        isLoading ? "opacity-100" : "opacity-0",
        display
      )}
      style={{ zIndex: 99 }}
    >
      <div className="fixed top-1/2">
        <CircularProgress size={62} />
      </div>
    </div>
  );
};
