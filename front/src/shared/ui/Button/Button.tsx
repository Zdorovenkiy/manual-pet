import type { CSSProperties, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { createPortal } from "react-dom";


export type Props = {
  width?: number; 
  height?: number;
  background?: CSSProperties["background"];
  color?: CSSProperties["color"];
  style?: React.CSSProperties;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

function Button({children, width, height, color, background, style, onClick}: PropsWithChildren<Props>) {

  return (
    <>
      <button 
        className={styles.button}
        style={{
          ...style,
          width: width,
          height: height,
          color: "green",
          background: background
        }}
        onClick={onClick}
      >
        asd
        {children}
      </button>
    </>
  )
}

export default Button