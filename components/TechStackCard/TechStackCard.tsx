import { Card, Grid, Typography } from "@mui/material";
import cn from "classnames";
import { FC, ReactElement, useState } from "react";

export interface TechStackCard {
  title: string;
  icon: ReactElement;
  isDarkMode: boolean;
  href?: string;
}

export const TechStackCard: FC<TechStackCard> = ({
  title,
  icon,
  isDarkMode,
  href,
}) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <Grid item xs={5} sm={3} md={2} lg={1}>
      <Card
        variant="outlined"
        className={cn(
          "relative p-3 flex flex-col rounded-2xl bg-white border-solid backdrop-blur-lg",
          isDarkMode
            ? " bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
        onMouseEnter={(_) => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="self-center my-10">{icon}</div>
        <a href={href} target={"_blank"}>
          <div
            className={cn(
              "w-full absolute left-0 bottom-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center transition-all duration-200 ease-in-out",
              isHovered ? " h-full opacity-100" : "h-0 opacity-0"
            )}
          >
            <Typography
              variant="subtitle1"
              className={cn("font-medium text-white text-center")}
            >
              {title}
            </Typography>
          </div>
        </a>
      </Card>
    </Grid>
  );
};
