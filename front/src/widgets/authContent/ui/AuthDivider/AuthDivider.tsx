import React from 'react'
import styles from "./AuthDivider.module.scss"

type Props = {}

function AuthDivider({}: Props) {
  return (
    <div className={styles.authDivider}>
      <span className={styles.authDivider_line}></span>
      <span className={styles.authDivider_word}>OR</span>
    </div>
  )
}

export default AuthDivider