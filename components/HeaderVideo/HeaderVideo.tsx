import { Typography } from "@mui/material";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typed from "react-typed";

type VideoSize = {
  width?: number;
  height?: number;
};

interface HeaderVideoProps {
  src: string;
  poster: string;
  stringsToType?: string[];
  loop?: boolean;
}

export const HeaderVideo: FC<HeaderVideoProps> = ({
  src,
  poster,
  stringsToType,
  loop,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const [videoSize, setVideoSize] = useState<VideoSize>();

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
      <video
        src={src}
        autoPlay
        playsInline
        loop
        muted
        className={cn(
          "min-w-full min-h-full object-cover absolute left-0 top-0 h-96 brightness-75 bg-transparent",
          isDarkMode ? "opacity-40" : "opacity-80"
        )}
        // poster={poster}
        width={videoSize?.width}
        height={videoSize?.height}
        onLoadedMetadata={() =>
          setVideoSize({
            width:
              typeof window !== "undefined" ? window.innerWidth : undefined,
            height: 384,
          })
        }
      />
    </section>
  );
};
