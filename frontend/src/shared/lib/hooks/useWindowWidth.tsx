import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const widowWidthOnFirstRender = window.innerWidth;

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

export default useWindowWidth;
