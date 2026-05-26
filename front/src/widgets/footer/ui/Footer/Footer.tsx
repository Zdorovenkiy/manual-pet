import FooterLogo from "../FooterLogo/FooterLogo";
import FooterInfo from "../FooterInfo/FooterInfo";
import styles from "./Footer.module.scss";

type Props = {}

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <FooterLogo />
        <FooterInfo />
      </div>
    </div>
  )
}

export default Footer