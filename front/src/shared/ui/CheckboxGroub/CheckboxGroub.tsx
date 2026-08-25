import React from 'react'
import styles from "./CheckboxGroub.module.scss";
type Props = {
  filters?: string[];
}

function CheckboxGroub({filters = []}: Props) {
  return (
    <div className={styles.checkboxGroub}>
      {
        filters.map((filter, index) => {
          const id = String(index)
          return (
            <div className={styles.checkboxGroub__item}>
              <input type="checkbox" name={filter} id={id} />
              <label htmlFor={id}>{filter}</label>
            </div>
          )
        })
      }
    </div>
  )
}

export default CheckboxGroub