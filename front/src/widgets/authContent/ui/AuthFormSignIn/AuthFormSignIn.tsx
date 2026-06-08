import React from 'react'
import styles from "./AuthFormSignIn.module.scss"
import AuthButton from '../AuthButton/AuthButton'
import AuthDivider from '../AuthDivider/AuthDivider'
import { Input } from '@/shared/ui'
import { NavLink } from 'react-router'
type Props = {}

function AuthFormSignIn({}: Props) {
  return (
    <div className={styles.authFormSignIn}>
      <div className={styles.authFormSignIn__container}>
        <h1 className={styles.authFormSignIn_title}>
          Sign in
        </h1>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <AuthButton  
          border='none'
          color='#f8f9f2'
          background='#4a6c47'
        >
          Sign in with Email
        </AuthButton>
        <AuthDivider />
        <AuthButton 
          border='1px solid #989b91'
          color='#101d1f'
          background='transparent'
        >
          Sign in with google
        </AuthButton>
        <div className={styles.authFormSignIn__undertext}>
          <p className={styles.authFormSignIn__undertext_resetPassword}>
            Need help signing in? <NavLink to={'/reset-password'}>Reset your password</NavLink>
          </p>
          <p className={styles.authFormSignIn__undertext_termsOfService}>
            By using Adaline, you are agreeing to our
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthFormSignIn