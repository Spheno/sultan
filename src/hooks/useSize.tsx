import { useState, useEffect } from 'react';

export function useSize(): number {

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const hendleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", hendleResize);
    return () => {
      window.removeEventListener("resize", hendleResize);
    }
  }, [])
  return windowSize
}