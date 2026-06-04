import { useScrollToTop } from '@/shared/model';
import { type PropsWithChildren } from 'react';
import styles from "./AuthLayout.module.scss"

function AuthLayout({children}: PropsWithChildren) {
  useScrollToTop();

  return (
    <>
      <div className={styles.auth}>
        <div className={styles.auth__container}>
          {children}
          <div className={styles.auth__thumbnail}>

          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout