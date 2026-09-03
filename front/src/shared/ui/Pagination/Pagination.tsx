import React from 'react'
import styles from "./Pagination.module.scss"
import ArrowIcon from '../ArrowIcon/ArrowIcon'

type Props = {
  page?: number;
  pageSize?: number;
  limit?: number;
}

// todo доделать на api сервера
function Pagination({page = 0, pageSize = 10, limit = 10}: Props) {
  const isActive = !!limit;
  return (
    <div className={styles.pagination}>
      <div className={`${styles.pagination_btn} ${!isActive && styles.pagination_inactive}`}>
        <ArrowIcon
          rotate={-90} 
          width={20} 
          height={20}
          style={{cursor: "unset"}}  
        />
      </div>
      { 
        Array.from({ length: limit }, (_, index) => {
          return <div className={styles.pagination_btn}>
            {index + 1}
          </div>
        })
      }
      <div className={`${styles.pagination_btn} ${!isActive && styles.pagination_inactive}`}>
        <ArrowIcon 
          rotate={90} 
          width={20} 
          height={20}
          style={{cursor: "unset"}}
        />
      </div>
    </div>
  )
}

export default Pagination