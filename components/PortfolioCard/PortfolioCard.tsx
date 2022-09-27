import { Chip, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Image from "next/image";
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
  imageSize,
  chipContent,
  buttonProps,
}) => {
  const t = useGetText();

  return (
    <Grid item xs={12} md={6} lg={4} xl={3} className={"p-3"}>
      <div
        className={cn(
          "w-full h-full bg-white border border-solid backdrop-blur-lg rounded-md px-3 py-2",
          isDarkMode
            ? "bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        <Image
          src={imageSrc}
          width={imageSize.width}
          height={imageSize.height}
          layout={"responsive"}
          className={"mt-3"}
        />
        <Typography variant="h5" className="mt-7 mb-3">
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
        {buttonProps?.href ? (
          <a href={buttonProps.href} target={"_blank"} rel={"noreferrer"}>
            <ButtonWrapper
              label={buttonProps?.label || "Visit website"}
              className={"mt-10 mb-3"}
            />
          </a>
        ) : (
          <ButtonWrapper
            label={buttonProps?.label || "Visit website"}
            className={"mt-10 mb-3"}
          />
        )}
      </div>
    </Grid>
  );
};
