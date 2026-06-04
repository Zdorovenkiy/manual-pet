import styles from "./AuthContent.module.scss"
import AuthHeader from '../AuthHeader/AuthHeader'
import AuthFooter from '../AuthFooter/AuthFooter'
import AuthForm from '../AuthForm/AuthForm'

type Props = {}

function AuthContent({}: Props) {
  return (
    <div className={styles.authContent}>
      <AuthHeader />
      <AuthForm />
      <AuthFooter />
    </div>
  )
}

export default AuthContent