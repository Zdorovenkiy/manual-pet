import React from 'react'
import styles from "./CatalogPage.module.scss"
import { PostsContainer } from '@/widgets/posts'
import { Filter } from '@/widgets/filter'
type Props = {}

function CatalogPage({}: Props) {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.catalogPage__container}>
        <PostsContainer />
        <Filter />
      </div>
    </div>
  )
}

export default CatalogPage