import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
