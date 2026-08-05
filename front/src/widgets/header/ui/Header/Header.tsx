
import styles from "./Header.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNav from "../HeaderNav/HeaderNav";
import { StartTrialButton } from "@/features/startTrial";
import { useDropdownMenu } from "../../model/useDropdownMenu";
import SignOut, { authSelector } from "@/features/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
type Props = {}

function Header({}: Props) {
  const {isMenuVisible, close, open} = useDropdownMenu(); 
  const isAuth = useSelector(authSelector);
  return (
    <div className={styles.header} onMouseLeave={close}>
      <div className={styles.header__container}>
        <HeaderNav open={open} />
        <HeaderLogo />
        { isAuth ? (
            <SignOut />
          ) : (
            <StartTrialButton /> 
          ) 
        }
      </div>
      <HeaderMenu isMenuVisible={isMenuVisible} />
    </div>
  )
}

export default Header