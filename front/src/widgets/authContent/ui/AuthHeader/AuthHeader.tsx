import styles from "./AuthHeader.module.scss"
import Logo from "@shared/assets/images/Logo.png";
import { useSiteNavigate } from '@/shared/model';
import type { TRouteEnumKeys } from "@/app/routers";
import { AuthButton } from "@/features/authButton";

type Props = {
  buttonTitle: string;
  buttonPath: TRouteEnumKeys;
}

function AuthHeader({buttonTitle, buttonPath}: Props) {
  const navigate = useSiteNavigate();

  return (
    <div className={styles.authHeader}>
      <img src={Logo} alt="Logo" onClick={() => navigate("MAIN")} />
      <AuthButton
        background='transparent'
        border='1px solid #989b91'
        color='#101d1f'
        width={"fit-content"}
        height={30}
        onClick={() => navigate(buttonPath)}
        style={{
          fontWeight: 400,
          paddingInline: "12px"
        }}
      >
        {buttonTitle}
      </AuthButton>
    </div>
  )
}

export default AuthHeader