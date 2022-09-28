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
import { useGetText, useWindowSize } from "hooks";

export const Profile: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const t = useGetText();
  const { underSm } = useWindowSize();

  const [code, setCode] = useState(t("PROFILE_CODE_EDITOR"));

  const avatarSize = {
    width: underSm ? 100 : 175,
    height: underSm ? 100 : 175,
  };

  const ProfileItems = (
    <Grid container className="mt-5" columns={2}>
      <ProfileItem
        icon={<PlaceIcon />}
        titleTrlKey="PROFILE_LOCATION"
        isDarkMode={isDarkMode}
      />
      <ProfileItem
        icon={<AlternateEmailIcon />}
        titleTrlKey="PROFILE_EMAIL"
        variant={ProfileItemVariant.EMAIL}
        isDarkMode={isDarkMode}
      />
      <ProfileItem
        icon={<CloudDownloadIcon />}
        titleTrlKey="PROFILE_CV_DOWNLOAD"
        variant={ProfileItemVariant.DOWNLOAD_BUTTON}
        isDarkMode={isDarkMode}
      />
    </Grid>
  );

  return (
    <section className="my-20 relative">
      <div className="flex flex-col items-center mx-5 xs:mx-8 sm:mx-16">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between sm:items-center max-w-7xl lg:w-full">
          <div className="flex flex-row items-center">
            <Avatar
              alt="Adam Kui"
              src="/assets/images/profile.webp"
              className={cn(
                "border-2 border-solid mr-10 sm:mr-16 shadow-sm shadow-black",
                isDarkMode ? "border-white" : "border-slate-800"
              )}
              sx={{ width: avatarSize.width, height: avatarSize.height }}
            />

            <div className="flex flex-col sm:mt-10 md:mt-0">
              <Typography variant={underSm ? "h5" : "h4"}>
                {t("PROFILE_NAME")}
              </Typography>
              <Typography variant={underSm ? "subtitle1" : "h6"}>
                {t("PROFILE_JOB")}
              </Typography>
              {underSm ? null : ProfileItems}
            </div>
          </div>
          {!underSm ? null : (
            <div className="mt-5 justify-end">{ProfileItems}</div>
          )}
          <div className="flex justify-self-end mt-10 lg:mt-0 w-full lg:w-1/2">
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
