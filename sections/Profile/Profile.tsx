import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Prism, { highlight } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-dark.css";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import Editor from "react-simple-code-editor";

import { ProfileItem, ProfileItemVariant } from "components";
import { useGetText } from "hooks";

export const Profile: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();

  const [code, setCode] = useState(t("PROFILE_CODE_EDITOR"));

  return (
    <section className="my-20 relative">
      <div className="flex flex-col items-center mx-5 xs:mx-8 sm:mx-16">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center max-w-7xl lg:w-full">
          <div className="flex flex-col md:flex-row">
            <Avatar
              alt="Adam Kui"
              src="profile.webp"
              className={cn(
                "border-2 border-solid mr-16 shadow-sm shadow-black",
                isDarkMode ? "border-white" : "border-slate-800"
              )}
              sx={{ width: 175, height: 175 }}
            />

            <div className="flex flex-col mt-10 md:mt-0">
              <Typography variant="h4">{t("PROFILE_NAME")}</Typography>
              <Typography variant="h6">{t("PROFILE_JOB")}</Typography>
              <Grid container className="mt-5" columns={2}>
                <ProfileItem
                  icon={<PlaceIcon />}
                  titleTrlKey="PROFILE_LOCATION"
                />
                <ProfileItem
                  icon={<AlternateEmailIcon />}
                  titleTrlKey="PROFILE_EMAIL"
                  variant={ProfileItemVariant.EMAIL}
                />
                <ProfileItem
                  icon={<CloudDownloadIcon />}
                  titleTrlKey="PROFILE_CV_DOWNLOAD"
                  variant={ProfileItemVariant.DOWNLOAD_BUTTON}
                />
              </Grid>
            </div>
          </div>

          <div className="flex justify-self-end mt-20 lg:mt-0 w-full lg:w-1/2">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                highlight(code, Prism.languages["javascript"], "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
              className={cn(
                "text-white rounded-md w-full",
                isDarkMode ? "bg-slate-900" : "bg-slate-900"
              )}
            />
          </div>
        </div>
        <Divider
          className="mt-10 mx-16 max-w-7xl w-full"
          variant="fullWidth"
          sx={{
            bgcolor: isDarkMode ? "white" : "rgb(30 41 59)",
          }}
        />
      </div>
    </section>
  );
};
