import { StartTrialButton } from '@/features/startTrial'
import React, { useEffect, useState } from 'react'
import styles from "./ConclusionFade.module.scss";
import ConclusionTypingText from '../ConclusionTypingText/ConclusionTypingText';

type Props = {
  opacity: number;
  elementRef: React.RefObject<HTMLDivElement | null>;
}

function ConclusionFade({opacity, elementRef}: Props) {
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Tempora autem quos ipsum facere provident, fugit et natus
          consequuntur cum voluptates accusamus. Repellat nobis quaerat
          nesciunt aspernatur cum modi et nihil. Lorem ipsum dolor sit, 
          amet consectetur adipisicing elit. Dolorum atque natus cumque 
          porro ducimus id ad veniam, cum recusandae nam labore tenetur 
          adipisci perferendis fugit? Assumenda temporibus nam aperiam rem?
          Ipsam, mollitia, vel voluptate laborum ad delectus impedit quidem 
          nostrum unde dolor consectetur illum in animi placeat labore magnam 
          voluptatem possimus eveniet? Molestias odio accusantium atque, 
          molestiae quidem ipsa esse! Dolorem laborum ipsa nulla eos mollitia 
          ipsum debitis, suscipit rerum. Quidem odit sed minima quaerat culpa 
          natus, magni possimus provident dolores perferendis rerum omnis eaque 
          libero nemo. Neque, enim perspiciatis! Natus doloribus soluta perspiciatis
          repellendus magni, necessitatibus accusantium exercitationem, mollitia amet.`;

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
        <ConclusionTypingText text={text} />
      </div>
    </div>
  )
}

export default ConclusionFade