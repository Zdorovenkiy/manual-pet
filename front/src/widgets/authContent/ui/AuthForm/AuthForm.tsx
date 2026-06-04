import styles from "./AuthForm.module.scss"
import { Input } from '@/shared/ui'
import AuthButton from '../AuthButton/AuthButton'

type Props = {}

function AuthForm({}: Props) {
  return (
    <div className={styles.authForm}>
      <div className={styles.authForm__container}>
        <h1 className={styles.authForm_title}>
          Create an account
        </h1>
        <div className={styles.authForm__names}>
          <Input placeholder='First name' />
          <Input placeholder='Last name' />
        </div>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <AuthButton  
          border='none'
          color='#f8f9f2'
          background='#4a6c47'
        >
          Sign up with Email
        </AuthButton>
        <div className={styles.authForm__divider}>
          <span className={styles.authForm__divider_line}></span>
          <span className={styles.authForm__divider_word}>OR</span>
        </div>
        <AuthButton 
          border='1px solid #989b91'
          color='#101d1f'
          background='transparent'
        >
          Sign up with google
        </AuthButton>
        <p className={styles.authForm_termsOfService}>
          By using Adaline, you are agreeing to our
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
        </p>
      </div>
    </div>
  )
}

export default AuthForm