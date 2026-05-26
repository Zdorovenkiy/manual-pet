import styles from "./ConclusionThumbnail.module.scss";
import thumbnail from "@shared/assets/background1.jpg";

type Props = {
  opacity: number;
}

function ConclusionThumbnail({opacity}: Props) {
  return (
    <div className={styles.conclusionThumbnail}>
      <img 
        src={thumbnail} 
        alt="thumbnail"
        style={{
          opacity: opacity
        }}
      />
    </div>
  )
}

export default ConclusionThumbnail