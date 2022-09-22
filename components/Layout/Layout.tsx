import cn from "classnames";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetText } from "hooks";
import { setDarkMode } from "../../store/common";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const dispatch = useDispatch();
  const t = useGetText();

  useEffect(() => {
    const getAndSetDarkMode = () => {
      if (typeof window === "undefined") return;

      const hasDarkModeSaved = localStorage.getItem("isDarkMode");

      if (hasDarkModeSaved) {
        dispatch(setDarkMode(hasDarkModeSaved === "true"));
      } else {
        localStorage.setItem("isDarkMode", "false");
      }
    };

    getAndSetDarkMode();
  }, []);

  return (
    <>
      <Head>
        <title>{t("PAGE_TITLE")}</title>
      </Head>
      <main
        className={cn(
          isDarkMode ? "bg-slate-800 text-white" : "bg-white",
          "transition-all duration-200 ease-in-out min-h-screen relative"
        )}
      >
        <Header />
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
