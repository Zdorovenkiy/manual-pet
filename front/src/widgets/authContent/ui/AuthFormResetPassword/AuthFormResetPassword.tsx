import { AuthButton } from "@/features/authButton"
import styles from "./AuthFormResetPassword.module.scss"
import { Input } from '@/shared/ui'

type Props = {}

function AuthFormResetPassword({}: Props) {
  return (
    <div className={styles.authFormResetPassword}>
      <div className={styles.authFormResetPassword__container}>
        <h1 className={styles.authFormResetPassword_title}>
          Reset password
        </h1>
        <Input type='email' placeholder='Email' />
        <AuthButton  
          border='none'
          color='#f8f9f2'
          background='#4a6c47'
        >
          Send reset link to Email
        </AuthButton>
      </div>
    </div>
  )
}

export default AuthFormResetPassword