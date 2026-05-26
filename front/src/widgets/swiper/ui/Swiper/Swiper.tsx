import styles from "./Swiper.module.scss";
import { useKeenSwiper } from '../../lib/useKeenSwiper/useKeenSwiper';
import Image1 from "@shared/assets/slider1.jpg";
import Image2 from "@shared/assets/slider2.jpg";
import Image3 from "@shared/assets/slider3.jpg";
import SwiperThumnailSlide from '../SwiperThumbnailSlide/SwiperThumbnailSlide';
import SwiperSlide from '../SwiperSlide/SwiperSlide';
import SwiperNavigation from '../SwiperNavigation/SwiperNavigation';
import 'keen-slider/keen-slider.min.css'

type Props = {}

function Swiper({}: Props) {

  const images = [Image1, Image2, Image3];

  const {loaded, sliderRef, instanceRef, thumbnailRef, activeIndex} = useKeenSwiper(images.length)


  return (
    <div className={styles.swiper}>
      <div ref={sliderRef} className={`keen-slider ${styles.swiper__info}`}>
        {
          images.map((item) => (
            <SwiperSlide key={item} />
          ))
        }
        <SwiperNavigation loaded={loaded} instanceRef={instanceRef} />
      </div>
      <div ref={thumbnailRef} className={`${styles.swiper__thumbnail}`}>
        {
          images.map((item, id) => (
            <SwiperThumnailSlide key={item} image={item} isActive={activeIndex === id} />
          ))
        }
      </div>
    </div>
  )
}

export default Swiper