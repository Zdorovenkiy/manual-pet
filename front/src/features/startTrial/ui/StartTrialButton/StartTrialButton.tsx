import { Button } from "@/shared/ui/Button"

type Props = {
  background?: string; 
  color?: string; 
}

function StartTrialButton({background, color}: Props) {
  return (
    <Button background={background} color={color}>
      Start for free
    </Button>
  )
}

export default StartTrialButton