import { Button } from '@/shared/ui'
import { type ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button>{
  color: "#f8f9f2" | "#101d1f";
  background: "#4a6c47" | "transparent";
  border: "none" | "1px solid #989b91";
}

function AuthButton({
  style,
  children, 
  background, 
  color, 
  border, 
  width = "100%", 
  height = "34px", 
  onClick
}: Props) {

  

  return (
    <Button
      background={background}
      color={color}
      width={width}
      height={height}
      style={{
        borderRadius: "6px",
        border: border,
        letterSpacing: 0,
        fontWeight: 700,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default AuthButton