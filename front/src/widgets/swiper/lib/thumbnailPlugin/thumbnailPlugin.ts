
import type { KeenSliderHooks, KeenSliderInstance, KeenSliderPlugin } from "keen-slider/react";
import type { RefObject } from "react";

export function thumbnailPlugin(
  mainRef: RefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
): KeenSliderPlugin {
  return (slider) => {
    slider.on("created", () => {
      if (!mainRef.current) return

      setActiveIndex(0);

      mainRef.current.on("animationStarted", (main) => {
        const current = main.animator.targetIdx || 0;
        const next = Math.min(slider.track.details.maxIdx, current);

        setActiveIndex(next);

        slider.moveToIdx(next);
      })
    })
  }
}