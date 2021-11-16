import { useEffect, useState } from "react";

export const useResizer = () => {
  const initialWidth = window.innerWidth < 640;
  const [ isMobile, setIsMobile ] = useState(initialWidth);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isMobile]);

  return isMobile;
};
