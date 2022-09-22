import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Chip, Divider, Grid, Typography } from "@mui/material";
import cn from "classnames";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { useWindowSize } from "hooks";

interface TimeLineDataProps {
  date: string;
  company: string;
  position: string;
  body: string;
  icon: ReactElement;
  align: "left" | "right";
  iconColor: string;
  topConnectorColor?: string;
  bottomConnectorColor?: string;
  chipContent?: string[];
}

export const TimeLineItemWrapper: FC<TimeLineDataProps> = ({
  date,
  company,
  position,
  body,
  icon,
  align,
  topConnectorColor,
  bottomConnectorColor,
  iconColor,
  chipContent,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const { underSm } = useWindowSize();

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align={align}
        variant="body2"
        className={cn({ hidden: underSm })}
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: topConnectorColor }} />
        <TimelineDot sx={{ bgcolor: iconColor }}>{icon}</TimelineDot>
        <TimelineConnector sx={{ bgcolor: bottomConnectorColor }} />
      </TimelineSeparator>
      <TimelineContent
        sx={{ py: "12px", px: 2, display: "flex", flexDirection: "column" }}
      >
        <div
          className={cn(
            "w-fit",
            align === "right" || underSm ? "self-start" : "self-end"
          )}
        >
          <Typography variant="h5" component="span" align={"right"}>
            {company}
          </Typography>
          <Divider
            sx={{
              bgcolor: isDarkMode ? "white" : "rgb(30 41 59)",
            }}
          />
        </div>
        <Typography variant="subtitle1">{position}</Typography>
        {underSm ? (
          <Typography
            variant="subtitle2"
            className={cn(isDarkMode ? "text-slate-400" : "text-slate-700")}
          >
            {date}
          </Typography>
        ) : null}
        {chipContent && !underSm ? (
          <Grid
            container
            spacing={1}
            className={cn("mt-3 w-fit", { "self-end": align !== "right" })}
          >
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
        ) : null}
        <Typography
          variant="body1"
          className={cn(
            "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-3 py-2 mt-3",
            isDarkMode
              ? " bg-opacity-5 border-transparent"
              : "bg-opacity-100 border-grey",
            align === "right" ? "self-start" : "self-end"
          )}
        >
          {body}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
