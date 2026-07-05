import type { CSSProperties, PropsWithChildren } from "react";
import styles from "./Button.module.scss";


export type Props = {
  width?: CSSProperties["width"]; 
  height?: CSSProperties["height"];
  background?: CSSProperties["background"];
  color?: CSSProperties["color"];
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

function Button({children, width, height, color, background, style, onClick, disabled}: PropsWithChildren<Props>) {

  return (
      <button 
        className={styles.button}
        style={{
          ...style,
          width: width,
          height: height,
          color: color,
          background: background
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
  )
}

export default Button