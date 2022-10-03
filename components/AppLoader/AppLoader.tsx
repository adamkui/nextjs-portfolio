import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";

interface AppLoaderProps {
  isLoading: boolean;
}

export const AppLoader: FC<AppLoaderProps> = ({ isLoading }) => {
  // const { isLoading } = useSelector((state: ApplicationState) => state.common);

  return isLoading ? (
    <div
      className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-white"
      style={{ zIndex: 99 }}
    >
      <div className="fixed top-1/2">
        <CircularProgress size={62} />
      </div>
    </div>
  ) : null;
};
