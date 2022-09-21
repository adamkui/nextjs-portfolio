import { Button, Card, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { Section } from "../Section/Section";
import { techStackData, TechStackCard } from "./techStackData";

const TechStackCard: FC<TechStackCard> = ({ title, icon, isDarkMode }) => {
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
        <div
          className={cn(
            "w-full absolute left-0 bottom-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center transition-all duration-200 ease-out",
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
      </Card>
    </Grid>
  );
};

export const TechStack: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <Section
      title="Tech Stack 👨‍💻"
      body={
        "I know... this is the reoccuring topic that probalby almost all developers and recruiters are mostly interested in. 🔎 So I decided to collect the most important applications, programming languages, frameworks, libraries, package managers, etc., to show a little bit more of my background. If it got your attention, you can also take a look at my portfolio, or even better: go to my GitHub page, and see all my public repositories. Hope you'll enjoy! 😎"
      }
      className="flex flex-col mb-20"
    >
      <Link href="/portfolio">
        <Button
          variant="outlined"
          size="large"
          className={cn("self-center mb-20 mt-16", {
            "text-white border-white": isDarkMode,
          })}
        >
          {"View My Portfolio"}
        </Button>
      </Link>
      <Grid container className="justify-center" gap={3}>
        {techStackData.map(({ title, icon }) => {
          return (
            <TechStackCard
              key={title}
              title={title}
              icon={icon}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </Grid>
      <Typography className="text-center mt-10" variant="subtitle1">
        ... and many more 🤯
      </Typography>
    </Section>
  );
};
