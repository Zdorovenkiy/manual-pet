import { useScrollToTop } from '@/shared/model';
import { type PropsWithChildren } from 'react';
import styles from "./AuthLayout.module.scss";
import thumbnail from "@shared/assets/images/thumbnail-auth.jpg"

function AuthLayout({children}: PropsWithChildren) {
  useScrollToTop();

  return (
    <>
      <div className={styles.auth}>
        <div className={styles.auth__container}>
          {children}
          <div className={styles.auth__thumbnail} style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPositionY: "center"
          }}>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout