import { Typography } from "@mui/material";
import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { Section } from "../Section/Section";

type DeskSetupProps = {
  label: string;
  item: string;
};

export const AboutMe: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  const deskSetupProps: DeskSetupProps[] = [
    {
      label: "Desk",
      item: `Ikea IDÅSEN sitting/standing desk`,
    },
    {
      label: "Chair",
      item: `Ikea MARKUS`,
    },
    {
      label: "Laptop 1",
      item: `Apple MacBook Pro M1 16"`,
    },
    {
      label: "Laptop 2",
      item: `Apple MacBook Pro i5 13"`,
    },
    {
      label: "Laptop 3",
      item: `HP Elitebook i7 16"`,
    },
    {
      label: "Tablet",
      item: `iPad Air (1st gen)`,
    },
    {
      label: "Tablet",
      item: `iPad Air (1st gen)`,
    },
    {
      label: "Monitor",
      item: `LG 35WN65C-B 35"`,
    },
    {
      label: "Monitor light",
      item: `Xiami Mi Computer Monitor Light`,
    },
    {
      label: "Laptop stand",
      item: `Bestand`,
    },
    {
      label: "Desk pad",
      item: `DeltaHub Desk Pad - Size L`,
    },
    {
      label: "Keyboard",
      item: `Keychron K4 RGB`,
    },
    {
      label: "Mouse",
      item: `Logitech MX Vertical`,
    },
  ];

  return (
    <Section title="What I ❤️️" className="flex flex-col w-full mb-20">
      <div
        className={cn(
          "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-3 py-2 mt-3",
          isDarkMode
            ? " bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        <Typography variant="body1">
          I feel very lucky, because my job is also my passion. I sit quite a
          lot in front of my desk, so I also became passionate about my desk
          setup. I was watching quite a lot of videos on YouTube, and tried so
          many variations and items on my desk, but I'm very satisfied with the
          results now.
        </Typography>
        <br />
        <Typography variant="body1" className="font-bold">
          Here is what I use now:
        </Typography>
        <ul className="list-disc">
          {deskSetupProps.map(({ label, item }) => {
            return (
              <li className="ml-5">
                <b>{label}: </b>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="px-20">
          <img
            src="desk.jpg"
            alt="desk-setup"
            className="my-10 rounded-md w-full"
          />
        </div>

        <Typography variant="body1">
          In my free time I often like to go fishing / street workout / running
          / planespotting / cooking.
        </Typography>
        <div className="px-20">
          <img src="food.jpg" alt="food" className="my-10 rounded-md w-full" />
        </div>
      </div>
    </Section>
  );
};
