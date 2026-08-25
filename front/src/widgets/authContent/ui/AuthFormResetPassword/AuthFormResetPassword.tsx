import { useForm } from "react-hook-form";
import AuthButton from "../AuthButton/AuthButton"
import styles from "./AuthFormResetPassword.module.scss"
import { Input } from '@/shared/ui'
import { registerFormParams } from "@/shared/lib";
import type { IAuthUserCreate } from "@/features/auth";

type Props = {}

function AuthFormResetPassword({}: Props) {
  //Todo доделать смену пароля
  const { register, handleSubmit, formState: {errors} } = useForm<Pick<IAuthUserCreate, "email">>();

  async function onSubmit(data: unknown) {
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
            required: registerFormParams.required,
            pattern: registerFormParams.pattern,
          })}
        />
        {errors.email && <p className={styles.authFormResetPassword_error}>{errors.email.message}</p>}
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