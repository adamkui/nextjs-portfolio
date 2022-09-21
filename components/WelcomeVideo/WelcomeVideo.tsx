import { Typography } from "@mui/material";
import cn from "classnames";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Typed from "react-typed";

export const WelcomeVideo: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  let typed: any;

  useEffect(() => {
    if (typed) {
      typed.start();
    }
  }, [typed]);

  return (
    <section className="h-96 flex relative justify-center items-center text-center px-10">
      <Typography variant={"h4"} className={"text-white z-50"}>
        <Typed
          typedRef={(typedRef: any) => (typed = typedRef)}
          strings={[
            "Welcome.",
            "My name is Adam Kui.",
            "I'm a software developer from Budapest, Hungary.",
            "Take a look around!",
          ]}
          startDelay={500}
          typeSpeed={25}
          backSpeed={5}
          backDelay={1750}
          loop
        />
      </Typography>
      <video
        src="river_loop.mp4"
        autoPlay
        loop
        muted
        className={cn(
          "min-w-full min-h-full object-cover absolute left-0 top-0 h-96 brightness-75",
          isDarkMode ? "opacity-50" : "opacity-1"
        )}
      />
    </section>
  );
};
