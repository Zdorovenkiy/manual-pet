import { type RefObject } from 'react'
import styles from "./SwiperNavigation.module.scss";
import type { KeenSliderHooks, KeenSliderInstance } from 'keen-slider/react';
import { ArrowIcon } from '@/shared/ui';
import { useSelector } from 'react-redux';
import { themeSelector } from '@/features/theme';

type Props = {
  loaded: boolean,
  instanceRef: RefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>,
}

function SwiperNavigation({loaded, instanceRef}: Props) {
  const theme = useSelector(themeSelector);
  const color = theme === "dark" ? "#f8f9f2" : "#101d1f";
  return (
    loaded && instanceRef.current && (
      <div className={styles.navigation}>
        <ArrowIcon 
          rotate={-90}
          color={color}
          onClick={(e) => {
            e.stopPropagation(); 
            instanceRef.current?.prev()
          }} />
        <ArrowIcon 
          rotate={90}
          color={color}
          onClick={(e) => {
            e.stopPropagation(); 
            instanceRef.current?.next()
          }} />
      </div>
    )
  )
}

export default SwiperNavigation