import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

const getScreen = () => {
  const width = window.innerWidth;

  if (width < breakpoints.mobile) return "mobile";
  if (width < breakpoints.tablet) return "tablet";
  return "desktop";
};

export const useResponsive = () => {
  const [screen, setScreen] = useState(getScreen());

  useEffect(() => {
    const handleResize = () => setScreen(getScreen());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
};