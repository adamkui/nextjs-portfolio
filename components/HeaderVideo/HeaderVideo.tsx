import { Typography } from "@mui/material";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import Typed from "react-typed";
import Image from "next/image";

import { useWindowSize } from "hooks";

interface HeaderVideoProps {
  src: string;
  srcOnMobile: string;
  poster: string;
  staticTitle?: string;
  stringsToType?: string[];
  loop?: boolean;
}

export const HeaderVideo: FC<HeaderVideoProps> = ({
  src,
  srcOnMobile,
  poster,
  staticTitle,
  stringsToType,
  loop,
}) => {
  const sizeInfo = useWindowSize();

  const [isVideLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoTopProperty, setVideoTopProperty] = useState<string | number>(0);

  let typed: any;

  useEffect(() => {
    let top: string | number = 0;
    const { isLg, isXl, is2Xl, is3Xl, is4Xl, is5Xl } = sizeInfo;

    if (isLg) {
      top = "-20%";
    }

    if (isXl) {
      top = "-27.5%";
    }

    if (is2Xl) {
      top = "-30%";
    }

    if (is3Xl) {
      top = "-35%";
    }

    if (is4Xl) {
      top = "-35%";
    }

    if (is5Xl) {
      top = "-50%";
    }

    setVideoTopProperty(top);
  }, [sizeInfo]);

  useEffect(() => {
    typed?.start();
  }, [typed]);

  return (
    <section className="h-56 sm:h-96 2xl:h-128 4xl:h-156 flex relative justify-center items-center text-center px-10 overflow-hidden">
      <Typography
        variant={sizeInfo.underSm ? "h5" : "h4"}
        className={"text-white z-40"}
      >
        {stringsToType ? (
          <Typed
            typedRef={(typedRef: any) => (typed = typedRef)}
            strings={stringsToType}
            startDelay={500}
            typeSpeed={25}
            backSpeed={5}
            backDelay={1750}
            loop={loop}
          />
        ) : (
          staticTitle
        )}
      </Typography>
      <Image
        src={poster}
        layout={"fill"}
        style={{
          top: videoTopProperty,
        }}
        className={cn(
          "min-w-full min-h-full object-cover absolute left-0 brightness-35 dark:brightness-75 bg-transparent",
          isVideLoaded ? "opacity-0" : "opacity-80 dark:opacity-60"
        )}
      />
      <video
        src={sizeInfo.underSm ? srcOnMobile : src}
        autoPlay
        playsInline
        loop
        muted
        style={{
          top: videoTopProperty,
        }}
        className={cn(
          "min-w-full min-h-full object-cover absolute left-0 brightness-50 dark:brightness-75 bg-transparent",
          isVideLoaded ? "opacity-80 dark:opacity-40" : "opacity-transparent"
        )}
        onTimeUpdate={() => {
          setVideoLoaded(true);
        }}
      />
    </section>
  );
};
