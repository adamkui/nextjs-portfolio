import { Button, Card, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiHtml5, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Section } from "../Section/Section";

interface TechStackCard {
  title: string;
  icon: ReactElement;
  isDarkMode: boolean;
}

const TechStackCard: FC<TechStackCard> = ({ title, icon, isDarkMode }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <Grid item xs={2}>
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
          <Typography variant="h6" className={cn("font-medium text-white")}>
            {title}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
};

export const TechStack: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  const techStackData: Omit<TechStackCard, "isDarkMode">[] = [
    {
      title: "React",
      icon: <FaReact size={72} color="blue" />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript size={72} color="blue" />,
    },
    {
      title: "NextJS",
      icon: <TbBrandNextjs size={72} color="black" />,
    },
    {
      title: "HTML/CSS",
      icon: <SiHtml5 size={72} color="orange" />,
    },
    {
      title: "React",
      icon: <FaReact size={72} color="blue" />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript size={72} color="blue" />,
    },
    {
      title: "NextJS",
      icon: <TbBrandNextjs size={72} color="black" />,
    },
    {
      title: "HTML/CSS",
      icon: <SiHtml5 size={72} color="orange" />,
    },
  ];

  return (
    <Section
      title="Tech Stack"
      body={
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tenetur nobis accusamus culpa expedita, laudantium dolores asperiores reprehenderit deleniti assumenda maxime voluptatem quod earum officia omnis ab est facere nihil nemo neque tempora incidunt. Quisquam accusamus inventore eum iste nulla iusto suscipit est id sapiente delectus animi amet a aliquid, rerum libero quaerat saepe beatae nam voluptates nihil consequatur accusantium?"
      }
      className="flex flex-col"
      lastSection
    >
      <Link href="/portfolio">
        <Button
          variant="outlined"
          size="large"
          className={cn("self-center mt-16 mb-20", {
            "text-white border-white": isDarkMode,
          })}
        >
          {"Portfolio"}
        </Button>
      </Link>
      <Grid container className="justify-center" gap={3}>
        {techStackData.map(({ title, icon }) => {
          return (
            <TechStackCard title={title} icon={icon} isDarkMode={isDarkMode} />
          );
        })}
      </Grid>
    </Section>
  );
};
