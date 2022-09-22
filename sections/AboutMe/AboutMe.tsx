import { Typography } from "@mui/material";
import cn from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { Section } from "components";
import { deskSetupItems } from "data";
import { useGetText } from "hooks";

export const AboutMe: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  return (
    <Section title={t("ABOUT_ME_TITLE")} className="flex flex-col w-full mb-20">
      <div
        className={cn(
          "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-3 py-2 mt-3",
          isDarkMode
            ? " bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        <Typography variant="body1">{t("ABOUT_ME_BODY_1")}</Typography>
        <Typography variant="body1">{t("ABOUT_ME_BODY_2")}</Typography>
        <br />
        <Typography variant="body1" className="font-bold">
          {t("ABOUT_ME_BODY_3")}
        </Typography>
        <ul className="list-disc">
          {deskSetupItems.map(({ label, item }) => {
            return (
              <li className="ml-5" key={label}>
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
      </div>
    </Section>
  );
};
