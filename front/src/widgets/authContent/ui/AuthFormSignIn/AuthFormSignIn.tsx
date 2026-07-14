import styles from "./AuthFormSignIn.module.scss"
import AuthDivider from '../AuthDivider/AuthDivider'
import { Input } from '@/shared/ui'
import { NavLink } from 'react-router'
import AuthButton from '../AuthButton/AuthButton'
import { useForm } from 'react-hook-form'
import { type TAuthUserLogin } from '@/features/auth'
import { registerFormParams } from "@/shared/lib"
import { useSignInSubmit } from "../../api/useSignInSubmit"
type Props = {}

function AuthFormSignIn({}: Props) {
  const { register, handleSubmit, formState: {errors}, setError, clearErrors } = useForm<TAuthUserLogin>();
  const {onSubmit, isLoading} = useSignInSubmit(setError, clearErrors);

  return (
    <div className={styles.authFormSignIn}>
      <form 
        className={styles.authFormSignIn__container} 
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.authFormSignIn_title}>
          Sign in
        </h1>
        {errors.root?.server && <p className={styles.authFormSignIn_error}>{errors.root?.server.message}</p>}
        <Input 
          type='email' 
          placeholder='Email'
          register={register('email', {
            required: registerFormParams.required,
            pattern: registerFormParams.pattern,
          })}
        />
        {errors.email && <p className={styles.authFormSignIn_error}>{errors.email.message}</p>}
        <Input 
          type='password' 
          placeholder='Password'
          register={register('password', {
            required: registerFormParams.required,
            minLength: registerFormParams.minLength
          })}
        />
        {errors.password && <p className={styles.authFormSignIn_error}>{errors.password.message}</p>}
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