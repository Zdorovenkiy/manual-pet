import React, { useEffect, useState } from 'react'
import styles from "./ConclusionTypingText.module.scss"
type Props = {
  text: string;
  speed?: number
}

function ConclusionTypingText({text, speed = 30}: Props) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <p className={styles.conclusionTypingText}>
      {displayedText}
    </p>
  )
}

export default ConclusionTypingText