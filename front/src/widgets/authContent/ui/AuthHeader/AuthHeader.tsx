import styles from "./AuthHeader.module.scss"
import Logo from "@shared/assets/images/Logo.png";
import { useSiteNavigate } from '@/shared/model';
import type { TRouteEnumKeys } from "@/app/routers";
import AuthButton from "../AuthButton/AuthButton";
import { useSelector } from "react-redux";
import { themeSelector } from "@/features/theme";

type Props = {
  buttonTitle: string;
  buttonPath: TRouteEnumKeys;
  color: string;
}

function AuthHeader({buttonTitle, buttonPath, color}: Props) {
  const navigate = useSiteNavigate();
  
  return (
    <div className={styles.authHeader}>
      <img src={Logo} alt="Logo" onClick={() => navigate("MAIN")} />
      <AuthButton
        background='transparent'
        border='1px solid #989b91'
        color={color}
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