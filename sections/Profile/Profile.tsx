import { Avatar, Divider, Grid, Typography } from "@mui/material";
import cn from "classnames";
import Prism, { highlight } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-dark.css";
import { FC, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Editor from "react-simple-code-editor";

import { personalData } from "data";
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
              src="profile.jpg"
              className={cn(
                "border-2 border-solid mr-16 shadow-sm shadow-black",
                isDarkMode ? "border-white" : "border-slate-800"
              )}
              sx={{ width: 175, height: 175 }}
            />

            <div className="flex flex-col mt-10 md:mt-0">
              <Typography variant="h4">{t("PROFILE_NAME")}</Typography>
              <Typography variant="h6">{t("PROFILE_JOB")}</Typography>
              <Grid container className="mt-5">
                {personalData.map(({ label, icon }) => {
                  return (
                    <Fragment key={label}>
                      <Grid item xs={1.5} sm={1} md={1} lg={1}>
                        {icon}
                      </Grid>
                      <Grid item xs={10.5} sm={11} md={11} lg={11}>
                        <Typography variant="subtitle1">{label}</Typography>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            </div>
          </div>

          <div className="flex flex-col justify-self-end mt-20 lg:mt-0 w-full md:w-1/2">
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
