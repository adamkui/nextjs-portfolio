import { Skeleton, Typography } from "@mui/material";
import cn from "classnames";
import Image from "next/image";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { Section } from "components";
import { useGetText, useWindowSize } from "hooks";

export const AboutMe: FC = () => {
  const t = useGetText();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const { underSm, underXl } = useWindowSize();

  const [isImageLoading, setImageLoading] = useState<boolean>(true);

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
      </div>
      <Image
        src="/desk.webp"
        width={1500}
        height={1000}
        layout={"responsive"}
        className={cn(
          "mt-10 justify-self-center rounded-md",
          isImageLoading ? "opacity-transparent" : "opacity-100"
        )}
        onLoad={() => {
          setImageLoading(false);
        }}
      />
      {isImageLoading ? (
        <Skeleton
          animation={"wave"}
          variant={"rounded"}
          className={"mt-10 w-full"}
          height={underSm ? 275 : underXl ? 550 : 850}
        />
      ) : null}
    </Section>
  );
};
