import React from 'react'
import styles from "./SwiperSlide.module.scss";

type Props = {}

function SwiperSlide({}: Props) {
  return (
    <div className="keen-slider__slide">
      <div className={styles.slide}>
        <div className={styles.slide__title}>
          <p>Featured 20 min read</p>
          <h1>Building Agentic RAG with Adaline</h1>
        </div>
        <p>Posted December 8, 2025</p>
      </div>
    </div>
  )
}

export default SwiperSlide