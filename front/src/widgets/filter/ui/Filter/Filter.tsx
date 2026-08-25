import React from 'react'
import styles from "./Filter.module.scss";
import { Button, ButtonGroup, CheckboxGroub } from '@/shared/ui';
type Props = {}

function Filter({}: Props) {
  return (
    <div className={styles.filter}>
      <div className={styles.filter_item}>
        <h1>Вид пагинации</h1>
        <ButtonGroup labels={["Скролл", "Переключение", "Третий вариант"]} />
      </div>
      <div 
        className={styles.filter_item}
      >
        <h1>Категории</h1>
        <CheckboxGroub filters={["test1", "test2", "test3", "test4", "test5", "test6",]} />
      </div>
      <div 
        className={styles.filter_item}
      >
        <Button width={"100%"} onClick={() => console.log("Применить")}>
          Применить
        </Button>
      </div>
    </div>
  )
}

export default Filter