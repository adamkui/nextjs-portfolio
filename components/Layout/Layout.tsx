import cn from "classnames";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetText } from "hooks";
import { setDarkMode } from "../../store/common";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { PageLoader } from "../PageLoader/PageLoader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const dispatch = useDispatch();
  const t = useGetText();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [fadeInContent, setFadeInContent] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fadeInContent = setTimeout(() => setFadeInContent(true), 300);

    if (typeof window === "undefined") return;

    const hasDarkModeSaved = localStorage.getItem("isDarkMode");

    if (hasDarkModeSaved) {
      dispatch(setDarkMode(hasDarkModeSaved === "true"));
    } else {
      localStorage.setItem("isDarkMode", "false");
    }

    setLoading(false);

    return () => {
      clearTimeout(fadeInContent);
    };
  }, [dispatch]);

  return (
    <>
      <PageLoader isLoading={isLoading} isDarkMode={isDarkMode} />
      <div
        className={cn(
          "transition-all duration-200 ease-in-out",
          fadeInContent ? "opacity-100" : "opacity-0"
        )}
      >
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
      </div>
    </>
  );
};

export default Layout;
