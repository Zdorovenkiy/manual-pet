import React, { useEffect, useState } from 'react'
import styles from "./Pagination.module.scss"
import ArrowIcon from '../ArrowIcon/ArrowIcon'

type Props = {
  page?: number;
  pageSize?: number;
  limit?: number;
  current?: number;
  offset?: number
}

// todo доделать на api сервера
function Pagination({page = 0, pageSize = 10, limit = 24, current = 0, offset = 7}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const isActive = !!limit;

  const offsetStart = currentPage - Math.floor(offset / 2) > 1;
  const offsetEnd = currentPage + Math.floor(offset / 2) < limit - 1;

  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

  useEffect(() => {
    console.log("currentPage ", currentPage);
    
  }, [currentPage])

  const offsetAction = {
    START: 1,
    END: 1,
    ALL: 2,
    NONE: 0
  } as const;

  type offsetActionKey = keyof typeof offsetAction;

  function getOffsetAction(): [offsetActionKey, typeof offsetAction[offsetActionKey]] {
    // if (offset >= limit) {
    //   return ["NONE", offsetAction.NONE];
    // } else if (currentPage - Math.floor(offset / 2) >= 1 && currentPage + Math.ceil(offset / 2) <= limit - 1) {
    //   return ["ALL", offsetAction.ALL];
    // } else if (currentPage - Math.floor(offset / 2) >= 1) {
    //   return ["START", offsetAction.START];
    // } else if (currentPage + Math.ceil(offset / 2) <= limit - 1) {
    //   return ["END", offsetAction.END];
    // }

    if (offset >= limit) {
      return ["NONE", offsetAction.NONE];
    } else if (offsetStart && offsetEnd) {
      return ["ALL", offsetAction.ALL];
    } else if (offsetStart) {
      return ["START", offsetAction.START];
    } else if (offsetEnd) {
      return ["END", offsetAction.END];
    }

    return ["NONE", offsetAction.NONE];
  }

  function getOffsetNumbers() {
    if (offset >= limit) {
      return 0;
    } else if (offsetStart && offsetEnd) {
      console.log("1");
      
      return currentPage - Math.floor(offset / 2);
      // return currentPage - 4;
    } else if (offsetStart) {
      console.log("2");
      return limit - offset - 1;
    }else if (offsetEnd) {
      console.log("3");
      return 0;
    }
    return 0
  }

  function clickHandler(index: number) {
    if (index < 1 || index > limit) return;
    setCurrentPage(index)
  }
  function paginationArray() {
    let paginationLimit = limit > offset ? offset : limit;
    const currentPosition = getOffsetAction(); 
    paginationLimit += currentPosition[1];
    console.log("currentPosition ", currentPosition);
    
    return Array.from(
    { length: paginationLimit }, 
    (_, index) => {
      let indexPage = index + 1;
      console.log("indexPage ", indexPage);
      
      if ((currentPosition[0] === "START" || currentPosition[0] === "ALL") && indexPage === 1) {
        return (
          <>
            <div 
                key={indexPage} 
                className={`${styles.pagination_btn} ${currentPage === indexPage && styles.pagination_active}`}
                onClick={() => clickHandler(indexPage)}
              >
              {indexPage}
            </div>
            <div 
                key={currentPosition[0] + indexPage} 
                className={`${styles.pagination_btn}`}
              >
              ...
            </div>
          </>
        )
      } else if ((currentPosition[0] === "END" || currentPosition[0] === "ALL") && indexPage === paginationLimit) {
        return (
          <>
            <div 
                key={currentPosition[0] + limit} 
                className={`${styles.pagination_btn}`}
              >
              ...
            </div>
            <div 
                key={limit} 
                className={`${styles.pagination_btn} ${currentPage === limit && styles.pagination_active}`}
                onClick={() => clickHandler(limit)}
              >
              {limit}
            </div>
          </>
        )
      }
      indexPage += getOffsetNumbers();

      return <div 
          key={indexPage} 
          className={`${styles.pagination_btn} ${currentPage === indexPage && styles.pagination_active}`}
          onClick={() => clickHandler(indexPage)}
        >
        {indexPage}
      </div>
    }) 
  }

  return (
    <div className={styles.pagination}>
      <div 
        className={`${styles.pagination_btn} ${!isActive && styles.pagination_inactive}`}
        onClick={() => clickHandler(currentPage - 1)}
        >
        <ArrowIcon
          rotate={-90} 
          width={20} 
          height={20}
          style={{cursor: "unset"}}  
        />
      </div>
      {paginationArray()}
      <div 
        className={`${styles.pagination_btn} ${!isActive && styles.pagination_inactive}`}
        onClick={() => clickHandler(currentPage + 1)}
        >
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