import styles from "./SwiperThumbnailSlide.module.scss";

type Props = {
  image: string,
  isActive: boolean;
}

function SwiperThumbnailSlide({image, isActive}: Props) {
  return (
    <div className={`${styles.thumbnailSlide} ${isActive ? styles.active : ""}`}>
      <img src={image} alt="slider" />
    </div>
  )
}

export default SwiperThumbnailSlide