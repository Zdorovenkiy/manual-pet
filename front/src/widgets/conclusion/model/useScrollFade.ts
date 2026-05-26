import { useEffect, useRef, useState } from "react";

export function useScrollFade() {
  const [opacity, setOpacity] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef?.current) return;

      const padding = 300;
      const element = elementRef.current.getBoundingClientRect();
      const elementHeight = element.height;
      const elementTop = element.top - padding;
      const windowHeight = window.innerHeight;

      const intersection = elementTop - windowHeight;
      const elementProcent = Math.abs(elementHeight) / 100;

      if (intersection < 0 && intersection > -elementHeight) {
        const intersectionProcent = Math.abs(intersection) / elementProcent;
        const elementOpacity = +Number(intersectionProcent / 100).toFixed(3);

        setOpacity(elementOpacity);
      } else if (intersection < -elementHeight) {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { opacity, elementRef };
}