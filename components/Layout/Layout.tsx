import cn from "classnames";
import Head from "next/head";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetText } from "hooks";
import { setDarkMode } from "store/common";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const dispatch = useDispatch();
  const t = useGetText();

  const [fadeInContent, setFadeInContent] = useState<boolean>(false);

  useEffect(() => {
    const fadeInContent = setTimeout(() => setFadeInContent(true), 300);

    if (typeof window === "undefined") return;

    const hasDarkModeSaved = localStorage.getItem("isDarkMode");

    if (hasDarkModeSaved) {
      dispatch(setDarkMode(hasDarkModeSaved === "true"));
    } else {
      localStorage.setItem("isDarkMode", "false");
    }

    return () => {
      clearTimeout(fadeInContent);
    };
  }, [dispatch]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        className={cn(
          "transition-all duration-200 ease-in-out",
          fadeInContent ? "opacity-100" : "opacity-0",
          { dark: isDarkMode }
        )}
      >
        <Head>
          <title>{t("PAGE_TITLE")}</title>
        </Head>
        <main
          className={
            "transition-all duration-200 ease-in-out min-h-screen relative bg-white dark:bg-slate-800 dark:text-white"
          }
        >
          <Header />
          {props.children}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
