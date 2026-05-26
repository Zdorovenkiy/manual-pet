import { Posts } from "@/widgets/posts";
import styles from "./MainPage.module.scss";
import { Swiper } from "@/widgets/swiper";
import { Conclusion } from "@/widgets/conclusion";

type Props = {}

function MainPage({}: Props) {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__container}>
        <Swiper />
        <Posts  />
        <Conclusion />
      </div>
    </div>
  )
}

export default MainPage