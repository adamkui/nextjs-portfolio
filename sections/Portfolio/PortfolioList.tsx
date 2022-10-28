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
  Typography,
} from "@mui/material";
import { extend } from "lodash";
import { FC } from "react";

import { GitHubLink, Section, TextUnderline } from "components";
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
        {[...professionalItems, ...hobbyItems].map((item) => {
          return (
            <ListItem
              key={item.titleTrlKey}
              secondaryAction={
                item.buttonProps?.href ? (
                  <a
                    href={item.buttonProps.href}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <Tooltip
                      title={t(
                        item.buttonProps.label || "PORTFOLIO_VISIT_WEBSITE"
                      )}
                    >
                      <IconButton edge="end" aria-label="Navigate to page">
                        <LaunchIcon />
                      </IconButton>
                    </Tooltip>
                  </a>
                ) : null
              }
            >
              <Tooltip title={item.type} placement={underMd ? "top" : "left"}>
                <ListItemAvatar className="hidden sm:block">
                  {item.type === PortfolioItemType.PROFESSIONAL ? (
                    <WorkIcon />
                  ) : (
                    <OtherHousesIcon />
                  )}
                </ListItemAvatar>
              </Tooltip>
              <ListItemText
                primary={t(item.titleTrlKey)}
                secondary={underSm ? null : item.chipContent.join(", ")}
              />
            </ListItem>
          );
        })}
      </List>
      <GitHubLink />
    </Section>
  );
};
