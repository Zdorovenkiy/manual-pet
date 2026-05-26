import { type RefObject } from 'react'
import styles from "./SwiperNavigation.module.scss";
import type { KeenSliderHooks, KeenSliderInstance } from 'keen-slider/react';
import { ArrowIcon } from '@/shared/ui/ArrowIcon';

type Props = {
  loaded: boolean,
  instanceRef: RefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>,
}

function SwiperNavigation({loaded, instanceRef}: Props) {
  return (
    loaded && instanceRef.current && (
      <div className={styles.navigation}>
        <ArrowIcon 
          rotate={-90}
          onClick={(e) => {
            e.stopPropagation(); 
            instanceRef.current?.prev()
          }} />
        <ArrowIcon 
          rotate={90}
          onClick={(e) => {
            e.stopPropagation(); 
            instanceRef.current?.next()
          }} />
      </div>
    )
  )
}

export default SwiperNavigation