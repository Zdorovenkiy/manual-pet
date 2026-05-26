import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { thumbnailPlugin } from "../thumbnailPlugin/thumbnailPlugin";

export function useKeenSwiper(swiperLength: number) {
  const images = [1, 2, 3];
  const [loaded, setLoaded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      // loop: true,
      drag: false,
      created() {
        setLoaded(true)
      },
    }
  );
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: swiperLength,
      // loop: true,
      initial: 0,
      drag: false,

    }, [thumbnailPlugin(instanceRef, setActiveIndex)]
  )

  return {
    loaded,
    sliderRef,
    instanceRef,
    thumbnailRef,
    activeIndex
  }
}