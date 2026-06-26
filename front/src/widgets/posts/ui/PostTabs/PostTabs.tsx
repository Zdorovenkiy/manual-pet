import { useState } from "react";
import styles from "./PostTabs.module.scss";
import { useTabSelector } from "@/shared/model/hooks/useTabSelector";

type Props = {}

function PostTabs({}: Props) {
  const posts = [
    { title: "All", count: 118 },
    { title: "Case Studies", count: 1 },
    { title: "Product", count: 1 },
    { title: "Research", count: 67 },
    { title: "Tutorials", count: 1 },
    { title: "Tips", count: 47 },
  ]

  const { activeTab, tabHandler } = useTabSelector();

  return (
    <ul className={styles.postTabs}>
      {
        posts.map((item, id) => (
          <li 
            key={item.title}
            className={`${styles.postTabs__element} ${activeTab === id ? styles.active : ""}`} 
            onClick={() => tabHandler(id)}
          >
            <span  className={styles.postTabs__element_title}>{item.title}</span> 
            <span className={styles.postTabs__element_count}>{item.count}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default PostTabs