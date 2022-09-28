import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";

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
        <CardMedia
          component="img"
          sx={{
            height: 225,
            objectFit: "contain",
          }}
          image={imageSrc}
          className={"p-3 mt-5"}
        />
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

/*

<Grid
      item
      gridAutoRows={"1fr"}
      xs={12}
      md={6}
      lg={4}
      xl={3}
      className={"p-3 h-full flex flex-col justify-between"}
    >
      <div
        className={cn(
          "flex flex-col relative w-full h-full bg-white border border-solid backdrop-blur-lg rounded-t-md px-3 py-2",
          isDarkMode
            ? "bg-opacity-5 border-transparent border-b-slate-500"
            : "bg-opacity-100 border-grey"
        )}
      >
        <div className="w-full h-64 mt-10 self-center flex justify-center">
          <Image
            src={imageSrc}
            width={imageSize.width}
            height={imageSize.height}
            layout={"intrinsic"}
            className={"object-contain"}
          />
        </div>

        <Typography variant="h5" className="mt-7 mb-3">
          {t(titleTrlKey)}
        </Typography>
        <Typography variant="body1">{t(descriptionTrlKey)}</Typography>
        <Grid container spacing={1} className={"mt-3 mb-10 w-fit"}>
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
      </div>
      <div
        className={cn(
          "relative w-full bg-white border-x border-b border-t-0 border-solid backdrop-blur-lg rounded-b-md px-3 py-2",
          isDarkMode
            ? "bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        {buttonProps?.href ? (
          <a href={buttonProps.href} target={"_blank"} rel={"noreferrer"}>
            <ButtonWrapper
              label={buttonProps?.label || "Visit website"}
              className={"my-3"}
            />
          </a>
        ) : (
          <ButtonWrapper
            label={buttonProps?.label || "Visit website"}
            className={"my-3"}
          />
        )}
      </div>
    </Grid>
  );

  */
