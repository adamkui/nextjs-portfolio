import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import WorkIcon from "@mui/icons-material/Work";
import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { extend } from "lodash";
import { FC } from "react";
3;

import { GitHubLink, Section } from "components";
import {
  hobbyPortfolioItems,
  professionalPortfolioItems,
} from "data/portfolioItems";
import { useGetText } from "hooks/useGetText";
import { useWindowSize } from "hooks/useWindowSize";

enum PortfolioItemType {
  PROFESSIONAL = "Professional",
  OTHER = "Other",
}

export const PortfolioList: FC = () => {
  const t = useGetText();
  const { underSm, underMd } = useWindowSize();

  const professionalItems = professionalPortfolioItems.map((item) =>
    extend({}, item, { type: PortfolioItemType.PROFESSIONAL })
  );

  const hobbyItems = hobbyPortfolioItems.map((item) =>
    extend({}, item, { type: PortfolioItemType.OTHER })
  );

  return (
    <Section
      title={t("PORTFOLIO_TITLE_LIST_VIEW")}
      className="flex flex-col w-full mt-10 mb-20"
    >
      <List dense>
        {[...professionalItems, ...hobbyItems].map(
          ({ titleTrlKey, buttonProps, type, chipContent, subtitleTrlKey }) => {
            return (
              <ListItem
                key={titleTrlKey}
                secondaryAction={buttonProps?.map(({ href, label }) => {
                  return (
                    <a
                      href={href}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className="mx-1"
                    >
                      <Tooltip title={t(label || "PORTFOLIO_VISIT_WEBSITE")}>
                        <IconButton edge="end" aria-label="Navigate to page">
                          {label?.includes("GITHUB") ? (
                            <GitHubIcon />
                          ) : (
                            <LaunchIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </a>
                  );
                })}
              >
                <Tooltip title={type} placement={underMd ? "top" : "left"}>
                  <ListItemAvatar className="hidden sm:block">
                    {type === PortfolioItemType.PROFESSIONAL ? (
                      <WorkIcon />
                    ) : (
                      <OtherHousesIcon />
                    )}
                  </ListItemAvatar>
                </Tooltip>
                <ListItemText
                  primary={
                    <a
                      href={
                        buttonProps
                          ? buttonProps[buttonProps.length - 1].href
                          : ""
                      }
                      target={"_blank"}
                      rel={"noreferrer"}
                    >{`${t(titleTrlKey)} (${t(subtitleTrlKey)})`}</a>
                  }
                  secondary={underSm ? null : chipContent.join(", ")}
                />
              </ListItem>
            );
          }
        )}
      </List>
      <GitHubLink />
    </Section>
  );
};
