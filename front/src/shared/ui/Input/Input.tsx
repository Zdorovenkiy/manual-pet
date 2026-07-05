import React from 'react'
import styles from "./Input.module.scss"
import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  register?: UseFormRegisterReturn
}

function Input({type = "text", placeholder, register}: Props) {
  return (
    <input 
      className={styles.input} 
      type={type}
      placeholder={placeholder}
      {...register}

    />
  )
}

export default Input