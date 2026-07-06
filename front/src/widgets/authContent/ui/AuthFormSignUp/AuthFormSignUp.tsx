import styles from "./AuthFormSignUp.module.scss"
import { Input } from '@/shared/ui'
import AuthDivider from "../AuthDivider/AuthDivider"
import AuthButton from "../AuthButton/AuthButton"
import { useSignUpMutation, type IAuthUserCreate } from "@/features/auth"
import { useForm } from "react-hook-form"
import { registerFormParams, tokenStorage } from "@/shared/lib"
import { useSignUpSubmit } from "../../api/useSignUpSubmit"


type Props = {}

function AuthFormSignUp({}: Props) {
  const { register, handleSubmit, formState: {errors} } = useForm<IAuthUserCreate>();
  const {onSubmit, isLoading} = useSignUpSubmit();
  
  return (
    <div className={styles.authFormSignUp}>
      <form 
        className={styles.authFormSignUp__container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.authFormSignUp_title}>
          Create an account
        </h1>
        <div className={styles.authFormSignUp__names}>
          <Input 
            type="text" 
            placeholder='First name'
            register={register('firstName', {
              required: registerFormParams.required
            })}
          />
          <Input
            type="text"
            placeholder='Last name'
            register={register('lastName', {
              required: registerFormParams.required
            })}
          />
        </div>
        <div className={styles.authFormSignUp__names}>
          {errors.firstName && <p className={styles.authFormSignUp_error}>{errors.firstName.message}</p>}
          {errors.lastName && <p className={styles.authFormSignUp_error}>{errors.lastName.message}</p>}
        </div>
        <Input 
          type='email' 
          placeholder='Email'
          register={register('email', {
            required: registerFormParams.required,
            pattern: registerFormParams.pattern
          })}
        />
        {errors.email && <p className={styles.authFormSignUp_error}>{errors.email.message}</p>}
        <Input 
          type='password' 
          placeholder='Password'
          register={register('password', {
            required: registerFormParams.required,
            minLength: registerFormParams.minLength,
          })}
        />
        {errors.password && <p className={styles.authFormSignUp_error}>{errors.password.message}</p>}
        <AuthButton  
          border='none'
          color='#f8f9f2'
          background='#4a6c47'
          disabled={isLoading}
        >
          Sign up with Email
        </AuthButton>
        <AuthDivider />
        <AuthButton 
          border='1px solid #989b91'
          color='#101d1f'
          background='transparent'
          disabled={isLoading}
        >
          Sign up with google
        </AuthButton>
        <p className={styles.authFormSignUp_termsOfService}>
          By using Adaline, you are agreeing to our
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
        </p>
      </form>
    </div>
  )
}

export default AuthFormSignUp