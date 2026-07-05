import { useForm } from "react-hook-form";
import AuthButton from "../AuthButton/AuthButton"
import styles from "./AuthFormResetPassword.module.scss"
import { Input } from '@/shared/ui'
import { EMAIL_REGEX } from "@/shared/model";

type Props = {}

function AuthFormResetPassword({}: Props) {
  //Todo доделать смену пароля
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    // const res = await signUp(data);
    console.log(data);
  }

  return (
    <div className={styles.authFormResetPassword}>
      <form 
        className={styles.authFormResetPassword__container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.authFormResetPassword_title}>
          Reset password
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
        <AuthButton  
          border='none'
          color='#f8f9f2'
          background='#4a6c47'
          // disabled={isLoading}
        >
          Send reset link to Email
        </AuthButton>
      </form>
    </div>
  )
}

export default AuthFormResetPassword