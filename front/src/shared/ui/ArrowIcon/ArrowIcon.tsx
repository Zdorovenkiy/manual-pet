import React from 'react'
import Arrow from "@shared/icons/arrow-slide.svg?react";

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
  color = "black",
  style,
  onClick,
}: Props) {
  return (
    <Arrow
      color={color}
      width={width}
      height={height}
      style={{ 
        ...style,
        transform: `rotate(${rotate}deg)`, 
        cursor: "pointer"
      }}
      onClick={onClick}
    />
  )
}

export default ArrowIcon