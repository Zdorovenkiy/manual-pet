import React, { type ComponentProps } from 'react'
import { useSignOutMutation } from '../api/authApi'
import { Button } from '@/shared/ui';
import { userSelector, userSlice } from '@/entities/user/model/userSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props extends ComponentProps<typeof Button> {
  background?: string; 
  color?: string; 
}

function SignOut({background, color}: Props) {
  const [signOut, {}] = useSignOutMutation()
  const { email } = useSelector(userSelector);

  return (
    <Button background={background} color={color} onClick={async () => {
      if (email) {
        await signOut({email});
      }
    }} >
      Sign Out
    </Button>
  )
}

export default SignOut