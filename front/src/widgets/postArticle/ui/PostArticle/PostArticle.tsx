import React from 'react'
import styles from "./PostArticle.module.scss"

type Props = {
  cleanHTML: string;
}

function PostArticle({cleanHTML}: Props) {
  return (
    <div className={styles.postArticle}>
      <div className={styles.postArticle__container}>
        <div 
          className={styles.postArticle__container_text}
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
        <div className={styles.postArticle__container_anchor}>
          <a href='#head1'>Anchor 1</a>
          <a href='#head2'>Anchor 2</a>
        </div>
      </div>
    </div>
  )
}

export default PostArticle