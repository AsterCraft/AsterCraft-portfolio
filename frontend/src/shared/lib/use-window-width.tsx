import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const widowWidthOnFirstRender =
    // window is browser api
    // but first html is getting served from server
    // so we cant know widow width on first render
    // so should we handle it differently?
    // or we could set default width and first render will be for good for some devices
    // - and adjusting after first render, if the width differs from default
    typeof window === "undefined" ? 0 : window.innerWidth;

  const [windowWidth, setWindowWidth] = useState(widowWidthOnFirstRender);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};
