import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import cn from "classnames";
import { FC } from "react";

import { PortfolioItemProps } from "data";
import { useGetText } from "hooks";
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper";

interface PortfolioCardProps extends PortfolioItemProps {
  isDarkMode: boolean;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({
  isDarkMode,
  titleTrlKey,
  descriptionTrlKey,
  imageSrc,
  chipContent,
  buttonProps,
}) => {
  const t = useGetText();

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      className={""}
      sx={{
        "& .MuiPaper-root": {
          boxShadow: "none",
        },
      }}
    >
      <Card
        className={cn(
          "bg-white border border-solid backdrop-blur-lg rounded-md h-full flex flex-col justify-between",
          isDarkMode
            ? "bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        <a href={buttonProps?.href} target={"_blank"} rel={"noreferrer"}>
          <CardMedia
            component="img"
            sx={{
              height: 225,
              objectFit: "contain",
            }}
            image={imageSrc}
            className={"p-3 mt-5"}
          />
        </a>
        <CardContent
          className={cn(
            "flex flex-col justify-start mt-7 h-full",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          <Typography variant="h5" className="mb-3">
            {t(titleTrlKey)}
          </Typography>
          <Typography variant="body1">{t(descriptionTrlKey)}</Typography>
          <Grid container spacing={1} className={"mt-3 w-fit"}>
            {chipContent.map((label) => {
              return (
                <Grid item key={label}>
                  <Chip
                    label={label}
                    variant="outlined"
                    className={cn({ "text-white": isDarkMode })}
                  />
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        {buttonProps ? (
          <CardActions className="px-3">
            <a href={buttonProps.href} target={"_blank"} rel={"noreferrer"}>
              <ButtonWrapper
                label={t(buttonProps?.label || "PORTFOLIO_VISIT_WEBSITE")}
                className={"my-3"}
              />
            </a>
          </CardActions>
        ) : null}
      </Card>
    </Grid>
  );
};
