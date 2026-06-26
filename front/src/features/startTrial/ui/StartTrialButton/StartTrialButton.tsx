import { useSiteNavigate } from "@/shared/model";
import { Button } from "@/shared/ui"
import type { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Button> {
  background?: string; 
  color?: string; 
}

function StartTrialButton({background, color}: Props) {
  const navigate = useSiteNavigate();
  return (
    <Button background={background} color={color} onClick={() => navigate("SIGN_IN")} >
      Start for free
    </Button>
  )
}

export default StartTrialButton