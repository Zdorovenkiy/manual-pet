import React from 'react'
import styles from "./SignIn.module.scss"
import Logo from "@shared/assets/images/Logo.png";
import { Button } from '@/shared/ui';
import { useSiteNavigate } from '@/shared/model';
import { AuthContent } from '@/widgets/authContent';
type Props = {}

function SignIn({}: Props) {  
  return (
    <AuthContent type='SIGN_IN' />
  )
}

export default SignIn