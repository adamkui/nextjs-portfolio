import { Grid, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import { FC, Fragment, ReactElement } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { texts } from "data";
import { useGetText } from "hooks";
import { TextUnderline } from "../TextUnderline/TextUnderline";

export enum ProfileItemVariant {
  TEXT = "TEXT",
  EMAIL = "EMAIL",
  DOWNLOAD_BUTTON = "DOWNLOAD_BUTTON",
}

interface ProfileItemProps {
  icon: ReactElement;
  titleTrlKey: keyof typeof texts;
  isDarkMode: boolean;
  variant?: ProfileItemVariant;
}

export const ProfileItem: FC<ProfileItemProps> = ({
  icon,
  titleTrlKey,
  isDarkMode,
  variant = ProfileItemVariant.TEXT,
}) => {
  const t = useGetText();

  const notify = () =>
    toast.success(t("PROFILE_CV_DOWNLOAD_TOASTIFY"), {
      autoClose: 2500,
      hideProgressBar: true,
    });

  const saveCv = () => {
    const cvHref = "Adam_Kui_CV.pdf";
    saveAs(cvHref, cvHref);
    notify();
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
        <ToastContainer
          position="bottom-left"
          theme={isDarkMode ? "dark" : "light"}
        />
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
