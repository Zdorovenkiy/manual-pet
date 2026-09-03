import React from 'react';
import Arrow from "@shared/assets/icons/arrow-slide.svg?react";
import styles from "./ArrowIcon.module.scss";
type Props = {
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
  style?: React.CSSProperties;
  onClick?: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void);
}

function ArrowIcon({
  width = 25,
  height = 25,
  rotate = 0,
  color,
  style,
  onClick,
}: Props) {
  return (
    <Arrow
      className={styles.arrowIcon}
      width={width}
      height={height}
      style={{ 
        transform: `rotate(${rotate}deg)`, 
        cursor: "pointer",
        color: color,
        ...style,
      }}
      onClick={onClick}
    />
  )
}

export default ArrowIcon