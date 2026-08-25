import styles from "./AuthContent.module.scss"
import AuthHeader from '../AuthHeader/AuthHeader'
import AuthFooter from '../AuthFooter/AuthFooter'
import { authEnum, type TAuthEnumKeys } from "../../model/types/authEnum"
import { themeSelector } from "@/features/theme"
import { useSelector } from "react-redux"

type Props = {
  type: TAuthEnumKeys;
}

function AuthContent({type}: Props) {
  const {
    headerButtonTitle,
    headerButtonPath,
    FormComponent
  } = authEnum[type];

  const theme = useSelector(themeSelector);
  const color = theme === "dark" ? "#f8f9f2" : "#101d1f";

  return (
    <div className={styles.authContent}>
      <AuthHeader 
        buttonTitle={headerButtonTitle}
        buttonPath={headerButtonPath}
        color={color}
      />
      <FormComponent authColor={color} />
      <AuthFooter />
    </div>
  )
}

export default AuthContent