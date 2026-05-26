
import styles from "./Header.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNav from "../HeaderNav/HeaderNav";
import { StartTrialButton } from "@/features/startTrial";
import { useDropdownMenu } from "../../model/useDropdownMenu";
type Props = {}

function Header({}: Props) {
  const {isMenuVisible, close, open} = useDropdownMenu(); 

  return (
    <div className={styles.header} onMouseLeave={close}>
      <div className={styles.header__container}>
        <HeaderNav open={open} />
        <HeaderLogo />
        <StartTrialButton />
      </div>
      <HeaderMenu isMenuVisible={isMenuVisible} />
    </div>
  )
}

export default Header