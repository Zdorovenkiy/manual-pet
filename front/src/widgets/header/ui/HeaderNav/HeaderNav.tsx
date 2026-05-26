import styles from "./HeaderNav.module.scss"
import { NavLink } from 'react-router-dom'
import Arrow from "@shared/icons/chevron-down.svg?react"

type Props = {
  open: () => void,
}

function HeaderNav({open}: Props) {
  return (
    <div className={styles.headerNav}>
      <NavLink to={"/asd"} className={styles.headerNav_dropdown} onMouseEnter={open} >
        Products
        <Arrow />
      </NavLink>
      <NavLink to={"/asd1"} >pricing</NavLink>
      <NavLink to={"/asd2"} >blog</NavLink>
    </div>
  )
}

export default HeaderNav