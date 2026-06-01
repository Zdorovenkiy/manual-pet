import Logo from "@shared/assets/images/Logo.png";
import styles from "./HeaderLogo.module.scss";

type Props = {}

function HeaderLogo({}: Props) {
  return (
    <div className={styles.headerLogo}>
      <img src={Logo} alt="logo" />
    </div>
  )
}

export default HeaderLogo