import Timeline from "@mui/lab/Timeline";
import { Grid } from "@mui/material";
import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { Section, TimeLineItemWrapper } from "components";
import { careerItems, companyLogos } from "data";
import { useGetText, useWindowSize } from "hooks";

export const Career: FC = () => {
  const { underSm } = useWindowSize();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  return (
    <Section
      title={t("CAREER_TITLE")}
      body={t("CAREER_BODY")}
      className="mb-10"
    >
      <Timeline position={underSm ? "right" : "alternate"} className="mt-20">
        {careerItems.map((props) => {
          return (
            <TimeLineItemWrapper
              key={props.company}
              date={props.date}
              company={props.company}
              position={props.position}
              body={props.body}
              icon={props.icon}
              align={props.align}
              topConnectorColor={props.topConnectorColor}
              bottomConnectorColor={props.bottomConnectorColor}
              iconColor={props.iconColor}
              chipContent={props.chipContent}
            />
          );
        })}
      </Timeline>
      <Grid container className="items-center justify-center mt-10" gap={0}>
        {companyLogos.map((props, index) => {
          return underSm ? null : (
            <Grid
              key={index}
              item
              sm={6}
              md={4}
              lg={3}
              className={cn("p-10", { invert: isDarkMode })}
            >
              {props.img}
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};
