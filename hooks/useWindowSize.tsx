import { useEffect, useState } from "react";

interface WindowSizeParams {
  width?: number;
  height?: number;
  underSm?: boolean;
  underXl?: boolean;
  under2xl?: boolean;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeParams>({
    width: undefined,
    height: undefined,
    underSm: false,
    underXl: false,
    under2xl: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        underSm: window.innerWidth < 640,
        underXl: window.innerWidth < 1280,
        under2xl: window.innerWidth < 1536,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
