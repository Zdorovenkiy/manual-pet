import styles from "./Conclusion.module.scss";
import ConclusionFade from '../ConclusionFade/ConclusionFade';
import ConclusionThumbnail from '../ConclusionThumbnail/ConclusionThumbnail';
import { useScrollFade } from '../../model/useScrollFade';

type Props = {}

function Conclusion({}: Props) {
  const { opacity, elementRef } = useScrollFade();
  
  return (
    <div className={styles.conclusion}>
      <ConclusionFade opacity={opacity} elementRef={elementRef} />
      <ConclusionThumbnail opacity={opacity} />
    </div>
  )
}

export default Conclusion