import { Typography } from "@mui/material";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typed from "react-typed";

import { useWindowSize } from "hooks";
import Image from "next/image";

interface HeaderVideoProps {
  src: string;
  srcOnMobile: string;
  poster: string;
  stringsToType?: string[];
  loop?: boolean;
}

export const HeaderVideo: FC<HeaderVideoProps> = ({
  src,
  srcOnMobile,
  poster,
  stringsToType,
  loop,
}) => {
  const windowSize = useWindowSize();

  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const [isVideLoaded, setVideoLoaded] = useState<boolean>(false);

  let typed: any;

  useEffect(() => {
    typed?.start();
  }, [typed]);

  return (
    <section className="h-96 flex relative justify-center items-center text-center px-10 overflow-hidden">
      {stringsToType ? (
        <Typography variant={"h4"} className={"text-white z-40"}>
          <Typed
            typedRef={(typedRef: any) => (typed = typedRef)}
            strings={stringsToType}
            startDelay={500}
            typeSpeed={25}
            backSpeed={5}
            backDelay={1750}
            loop={loop}
          />
        </Typography>
      ) : null}
      {isVideLoaded ? null : (
        <Image
          layout="fill"
          src={poster}
          className={cn(
            "min-w-full min-h-full object-cover absolute left-0 top-0 h-96 brightness-75 bg-transparent",
            isDarkMode ? "opacity-40" : "opacity-80"
          )}
        />
      )}
      <video
        src={windowSize.underSm ? srcOnMobile : src}
        autoPlay
        playsInline
        loop
        muted
        className={cn(
          "min-w-full min-h-full object-cover absolute left-0 top-0 h-96 brightness-75 bg-transparent",
          isDarkMode ? "opacity-40" : "opacity-80"
        )}
        // poster={poster}
        onTimeUpdate={() => {
          setVideoLoaded(true);
        }}
      />
    </section>
  );
};
