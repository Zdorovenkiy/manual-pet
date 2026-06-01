import React from 'react'
import styles from "./Loader.module.scss";

type Props = {}

function Loader({}: Props) {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_animation}>
      </div>
    </div>
  )
}

export default Loader