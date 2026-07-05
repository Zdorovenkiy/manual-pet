import React from 'react'
import styles from "./AuthFormSignIn.module.scss"
import AuthDivider from '../AuthDivider/AuthDivider'
import { Input } from '@/shared/ui'
import { NavLink } from 'react-router'
import AuthButton from '../AuthButton/AuthButton'
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'
import { type TAuthUserLogin, useSignInMutation } from '@/features/auth'
import { EMAIL_REGEX } from '@/shared/model'
type Props = {}

function AuthFormSignIn({}: Props) {
  const { register, handleSubmit } = useForm<TAuthUserLogin>();
  const [signIn, {isLoading}] = useSignInMutation();
  
  async function onSubmit(data: TAuthUserLogin) {
    const res = await signIn(data);
    console.log(res);
  }

  return (
    <div className={styles.authFormSignIn}>
      <form 
        className={styles.authFormSignIn__container} 
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.authFormSignIn_title}>
          Sign in
        </h1>
        <Input 
          type='email' 
          placeholder='Email'
          register={register('email', {
            required: true,
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email address'
            },
          })}
        />
        <Input 
          type='password' 
          placeholder='Password'
          register={register('password', {required: true, minLength: 8})}
        />
        <AuthButton  
          border='none'
          color='#f8f9f2'
          background='#4a6c47'
          disabled={isLoading}
        >
          Sign in with Email
        </AuthButton>
        <AuthDivider />
        <AuthButton 
          border='1px solid #989b91'
          color='#101d1f'
          background='transparent'
          disabled={isLoading}
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
      </form>
    </div>
  )
}

export default AuthFormSignIn