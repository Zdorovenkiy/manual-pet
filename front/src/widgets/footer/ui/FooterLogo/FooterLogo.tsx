import styles from "./FooterLogo.module.scss";
import Logo from "@shared/assets/Logo.png";

type Props = {}

function FooterLogo({}: Props) {
  return (
    <div className={styles.footerLogo}>
      <div className={styles.footerLogo_image}>
        <img src={Logo} alt="logo" />
      </div>
      <p className={styles.footerLogo_copyright}>© 2026 TEST LOGO. All rights reserved.</p>
    </div>
  )
}

export default FooterLogo