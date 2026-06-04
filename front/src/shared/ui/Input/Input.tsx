import React from 'react'
import styles from "./Input.module.scss"

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

function Input({type = "text", placeholder}: Props) {
  return (
    <input 
      className={styles.input} 
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input