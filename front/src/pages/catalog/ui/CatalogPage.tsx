import React from 'react'
import styles from "./CatalogPage.module.scss"
import { PostsContainer } from '@/widgets/posts'
import { ButtonGroup } from '@/shared/ui'
type Props = {}

function CatalogPage({}: Props) {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.catalogPage__container}>
        <PostsContainer />
        <div className={styles.catalogPage__filters}>
          <div className={styles.catalogPage__filters_item}>
            <p>Вид пагинации</p>
            <ButtonGroup labels={["Скролл", "Переключение", "Третий вариант"]} />
          </div>
          <div>
            <p>Категории</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage