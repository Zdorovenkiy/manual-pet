import React from 'react'
import styles from "./AuthFooter.module.scss"

type Props = {}

function AuthFooter({}: Props) {
  return (
    <div className={styles.authFooter}>
      <p className={styles.authFooter_info}>
        The single platform to iterate, evaluate, deploy, and monitor LLMs.
      </p>
      <p className={styles.authFooter_copyright}>
        © 2026 TEST LOGO All rights reserved.
      </p>
    </div>
  )
}

export default AuthFooter