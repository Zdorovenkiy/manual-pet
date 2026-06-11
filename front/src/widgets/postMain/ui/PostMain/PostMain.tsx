import React from 'react'
import styles from "./PostMain.module.scss"
import Image1 from "@shared/assets/images/slider1.jpg";

type Props = {
  post: {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    cleanHTML: string;
    image: string;
    time: string;
  };
}

function PostMain({post}: Props) {
  return (
    <div className={styles.postMain}>
      <div className={styles.postMain__info}>
        <div className={styles.postMain__info_title}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
        <div className={styles.postMain__info_posted}>
          <p>By {post.author}</p>
          <p>{post.date}</p>
        </div>
      </div>
      <img src={Image1} alt="image" />
    </div>
  )
}

export default PostMain