import { Typography } from "@mui/material";
import { FC, useEffect } from "react";
import Typed from "react-typed";

export const WelcomeVideo: FC = () => {
  let typed: any;

  useEffect(() => {
    if (typed) {
      typed.start();
    }
  }, [typed]);

  return (
    <section className="h-96 flex relative justify-center items-center text-center px-10">
      <Typography variant={"h4"}>
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
        className="min-w-full min-h-full object-cover opacity-50 absolute left-0 top-0 h-96"
      />
    </section>
  );
};
