import styles from "./NotFoundPage.module.scss";
import { NotFound } from "@/widgets/notFound";

type Props = {}
function NotFoundPage({}: Props) {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundPage__container}>
        <NotFound />
      </div>
      
    </div>
  )
}

export default NotFoundPage