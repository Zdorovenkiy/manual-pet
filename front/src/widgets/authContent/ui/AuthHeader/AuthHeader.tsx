import styles from "./AuthHeader.module.scss"
import Logo from "@shared/assets/images/Logo.png";
import { useSiteNavigate } from '@/shared/model';
import AuthButton from '../AuthButton/AuthButton';

type Props = {}

function AuthHeader({}: Props) {
  const navigate = useSiteNavigate();

  AuthButton
  
  return (
    <div className={styles.authHeader}>
      <img src={Logo} alt="Logo" onClick={() => navigate("MAIN")} />
      <AuthButton
        background='transparent'
        border='1px solid #989b91'
        color='#101d1f'
        width={68}
        height={30}
        onClick={() => navigate("SIGN_IN")}
        style={{
          fontWeight: 400
        }}
      >
        Sign in
      </AuthButton>
      {/* <Button
        width={68}
        height={30}
        style={{
          borderRadius: 6,
          letterSpacing: 0
        }}
        onClick={() => navigate("SIGN_IN")}
      >
        Sign in
      </Button> */}
    </div>
  )
}

export default AuthHeader