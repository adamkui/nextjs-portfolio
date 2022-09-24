import { Box, CircularProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import cn from "classnames";

interface PageLoaderProps {
  isDarkMode: boolean;
  isLoading: boolean;
}

export const PageLoader: FC<PageLoaderProps> = ({ isLoading, isDarkMode }) => {
  const [hideLoader, setHideLoader] = useState<boolean>(isLoading);

  useEffect(() => {
    const setLoaderDisplay = setTimeout(() => setHideLoader(!isLoading), 200);

    return () => {
      clearTimeout(setLoaderDisplay);
    };
  }, [isLoading]);

  return (
    <Box
      sx={{ zIndex: 99 }}
      className={cn(
        "fixed top-0 left-0 w-screen h-screen items-center justify-center bg-opacity-90 transition-all duration-200 ease-in-out",
        isDarkMode ? "bg-slate-900" : "bg-white",
        isLoading ? "opacity-100" : "opacity-0",
        hideLoader ? "hidden" : "flex"
      )}
    >
      <CircularProgress className="z-50" size={65} />
    </Box>
  );
};
