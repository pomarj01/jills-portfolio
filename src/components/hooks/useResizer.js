import { useEffect, useState } from "react";

export const useResizer = () => {
  const [ isMobile, setIsMobile ] = useState(0);

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
