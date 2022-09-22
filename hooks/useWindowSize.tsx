import { useEffect, useState } from "react";

interface WindowSizeParams {
  width?: number;
  height?: number;
  underSm?: boolean;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeParams>({
    width: undefined,
    height: undefined,
    underSm: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        underSm: window.innerWidth < 640,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
