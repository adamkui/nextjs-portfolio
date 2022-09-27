import { Grid, Typography } from "@mui/material";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";

interface PortfolioCardProps {
  isDarkMode: boolean;
  title: string;
  description: string;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({
  isDarkMode,
  title,
  description,
}) => {
  return (
    <Grid item xs={12} md={6} lg={4} xl={3} className={"p-3"}>
      <div
        className={cn(
          "w-full bg-white border border-solid backdrop-blur-lg rounded-md px-3 py-2",
          isDarkMode
            ? "bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        <Image
          src={"/profile.webp"}
          width={959}
          height={960}
          layout={"responsive"}
          className={"mt-3"}
        />
        <Typography variant="h5" className="mt-7 mb-3">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </Grid>
  );
};
