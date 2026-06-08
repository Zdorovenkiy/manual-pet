import styles from "./AuthContent.module.scss"
import AuthHeader from '../AuthHeader/AuthHeader'
import AuthFooter from '../AuthFooter/AuthFooter'
import AuthFormSignUp from '../AuthFormSignUp/AuthFormSignUp'
import { authEnum, type TAuthEnumKeys } from "../../model/types/authEnum"

type Props = {
  type: TAuthEnumKeys;
}

function AuthContent({type}: Props) {
  const {
    headerButtonTitle,
    headerButtonPath,
    FormComponent
  } = authEnum[type];

  return (
    <div className={styles.authContent}>
      <AuthHeader 
        buttonTitle={headerButtonTitle}
        buttonPath={headerButtonPath}
      />
      <FormComponent />
      <AuthFooter />
    </div>
  )
}

export default AuthContent