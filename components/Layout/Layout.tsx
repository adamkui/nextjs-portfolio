import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { Header } from "../Header/Header";
import { setDarkMode } from "../../store/common";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const isDarkMode = useSelector(
    (state: ApplicationState) => state.common.isDarkMode
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDarkModeFromLocalStorage = localStorage.getItem("isDarkMode");

    if (isDarkModeFromLocalStorage) {
      dispatch(setDarkMode(isDarkModeFromLocalStorage === "true"));
    } else {
      localStorage.setItem("isDarkMode", "false");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Adam Kui | Dev</title>
      </Head>
      <main
        className={cn(
          isDarkMode ? "bg-slate-800 text-white" : "bg-white",
          "transition-all duration-200 ease-in-out min-h-screen relative"
        )}
      >
        <Header />
        {props.children}
      </main>
    </>
  );
};

export default Layout;
