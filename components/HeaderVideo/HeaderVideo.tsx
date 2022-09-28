import { Typography } from "@mui/material";
import cn from "classnames";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Typed from "react-typed";

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

  let typed: any;

  useEffect(() => {
    typed?.start();
  }, [typed]);

  return (
    <section className="h-96 flex relative justify-center items-center text-center px-10">
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
          "min-w-full min-h-full object-cover absolute left-0 top-0 h-96 brightness-75",
          isDarkMode ? "opacity-40" : "opacity-80"
        )}
        poster={poster}
      />
    </section>
  );
};
