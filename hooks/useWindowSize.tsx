import { useEffect, useState } from "react";

interface WindowSizeParams {
  width?: number;
  height?: number;
  underSm?: boolean;
  underMd?: boolean;
  underLg?: boolean;
  underXl?: boolean;
  under2xl?: boolean;
  isSm?: boolean;
  isMd?: boolean;
  isLg?: boolean;
  isXl?: boolean;
  is2Xl?: boolean;
  is3Xl?: boolean;
  is4Xl?: boolean;
  is5Xl?: boolean;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeParams>({
    width: undefined,
    height: undefined,
    underSm: false,
    underMd: false,
    underLg: false,
    underXl: false,
    under2xl: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
    is3Xl: false,
    is4Xl: false,
    is5Xl: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        underSm: window.innerWidth < 640,
        underMd: window.innerWidth < 768,
        underLg: window.innerWidth < 1024,
        underXl: window.innerWidth < 1280,
        under2xl: window.innerWidth < 1536,
        isSm: window.innerWidth < 768 && window.innerWidth >= 640,
        isMd: window.innerWidth < 1024 && window.innerWidth >= 768,
        isLg: window.innerWidth < 1280 && window.innerWidth >= 1024,
        isXl: window.innerWidth < 1536 && window.innerWidth >= 1280,
        is2Xl: window.innerWidth < 2000 && window.innerWidth >= 1536,
        is3Xl: window.innerWidth < 2600 && window.innerWidth >= 2000,
        is4Xl: window.innerWidth < 3100 && window.innerWidth >= 2600,
        is5Xl: window.innerWidth >= 3100,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
