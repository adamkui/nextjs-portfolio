import { useGetText } from "@/hooks/useGetText";
import { Grid, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import { FC, Fragment, ReactElement } from "react";

import { texts } from "data";
import { TextUnderline } from "../TextUnderline/TextUnderline";

export enum ProfileItemVariant {
  TEXT = "TEXT",
  EMAIL = "EMAIL",
  DOWNLOAD_BUTTON = "DOWNLOAD_BUTTON",
}

interface ProfileItemProps {
  icon: ReactElement;
  titleTrlKey: keyof typeof texts;
  variant?: ProfileItemVariant;
}

export const ProfileItem: FC<ProfileItemProps> = ({
  icon,
  titleTrlKey,
  variant = ProfileItemVariant.TEXT,
}) => {
  const t = useGetText();

  const saveCv = () => {
    const cvHref = "Adam_Kui_CV.pdf";
    saveAs(cvHref, cvHref);
  };

  const ProfileItemVariations = {
    TEXT: <Typography variant="subtitle1">{t(titleTrlKey)}</Typography>,
    EMAIL: (
      <a href={`mailto:${t(titleTrlKey)}`} className="group">
        <Typography variant="subtitle1" className="cursor-pointer">
          {t(titleTrlKey)}
        </Typography>
        <TextUnderline />
      </a>
    ),
    DOWNLOAD_BUTTON: (
      <button onClick={() => saveCv()} className="group">
        <Typography variant="subtitle1">{t(titleTrlKey)}</Typography>
        <TextUnderline />
      </button>
    ),
  };

  return (
    <Grid item xs={12} className="flex">
      <div className="w-fit pr-3">{icon}</div>
      {ProfileItemVariations[variant]}
    </Grid>
  );
};
