import styles from "./AuthFormSignUp.module.scss"
import { Input } from '@/shared/ui'
import AuthDivider from "../AuthDivider/AuthDivider"
import { AuthButton } from "@/features/authButton"

type Props = {}

function AuthFormSignUp({}: Props) {
  // TODO переделать под react-hook-form 
  return (
    <div className={styles.authFormSignUp}>
      <div className={styles.authFormSignUp__container}>
        <h1 className={styles.authFormSignUp_title}>
          Create an account
        </h1>
        <div className={styles.authFormSignUp__names}>
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
        <AuthDivider />
        <AuthButton 
          border='1px solid #989b91'
          color='#101d1f'
          background='transparent'
        >
          Sign up with google
        </AuthButton>
        <p className={styles.authFormSignUp_termsOfService}>
          By using Adaline, you are agreeing to our
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
        </p>
      </div>
    </div>
  )
}

export default AuthFormSignUp