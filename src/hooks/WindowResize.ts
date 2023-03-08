import { useState, useEffect, useLayoutEffect } from "react";

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number , //| undefined
    height: number ,  //| undefined
  }>({
    width: 0,
    height: 0,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setLandscape] = useState<boolean>(false);


  useEffect(() => {
    // if(typeof window === "undefined") return;
    let t_window = window as Window
    // Handler to call on window resize
    function handleResize() {
      let new_size = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      setWindowSize(new_size);
      if (new_size.width <= 1280) {  //818
        if (isMobile == false) {
          setIsMobile(true)
        }
      } else {
        setIsMobile(false)
      }
      console.log("screen")
      console.log(screen.availHeight, screen.availWidth)
      if (screen.availHeight < screen.availWidth){
        setLandscape(true);
      } else {
        setLandscape(false);
      }

    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [typeof window]); // Empty array ensures that effect is only run on mount

  return {
    windowSize,
    isMobile,
    isLandscape
  };
}