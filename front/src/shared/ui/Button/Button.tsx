import type { CSSProperties, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { buttonStyles } from "@/shared/styleTypes/buttonStyles";


type Props = {
  width?: number; 
  background?: CSSProperties["background"];
  color?: CSSProperties["color"];
  style?: React.CSSProperties;
}

function Button({children, width, color, background, style}: PropsWithChildren<Props>) {

  buttonStyles
  return (
      <button 
        className={styles.button}
        style={{
          ...style,
          width: width,
          color: color,
          background: background
        }}
      >
        {children}
      </button>
  )
}

export default Button