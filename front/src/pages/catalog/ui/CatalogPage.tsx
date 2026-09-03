import React from 'react'
import styles from "./CatalogPage.module.scss"
import { PostsContainer } from '@/widgets/posts'
import { Filter } from '@/widgets/filter'
import { Pagination } from '@/shared/ui'
type Props = {}

function CatalogPage({}: Props) {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.catalogPage__container}>
        <div className={styles.catalogPage__main}>
          <Pagination />
          <PostsContainer />
          <Pagination />
        </div>
        <Filter />
      </div>
    </div>
  )
}

export default CatalogPage