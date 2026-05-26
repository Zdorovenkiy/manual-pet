import { StartTrialButton } from '@/features/startTrial'
import React from 'react'
import styles from "./ConclusionFade.module.scss";

type Props = {
  opacity: number;
  elementRef: React.RefObject<HTMLDivElement | null>;
}

function ConclusionFade({opacity, elementRef}: Props) {
  return (
    <div 
      className={styles.conclusionFade}
      style={{
        opacity: opacity
      }}
      ref={elementRef}
    >
      <div className={styles.conclusionFade__startTrial}>
        <h1>Start your journey with Adaline</h1>
        <StartTrialButton background={'#d3dddc'} color={'#101d1f'} />
      </div>
    </div>
  )
}

export default ConclusionFade