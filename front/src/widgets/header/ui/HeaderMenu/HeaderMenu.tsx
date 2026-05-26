import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

type Props = {
  isMenuVisible: boolean
}

function HeaderMenu({isMenuVisible}: Props) {
  return (
    <div className={`${styles.headerMenu} ${isMenuVisible ? styles.headerMenu_active : ''}`}>
      <div className={styles.headerMenu__container}>
        <div className={styles.headerMenu__column}>
          <NavLink to={"/asd"} className={styles.headerMenu__column_title} >
            <p>iterate</p>
            <h1>Scetch, test <br/> and refine</h1>
          </NavLink>
          <NavLink to={"/asd1"} >Editor</NavLink>
          <NavLink to={"/asd2"} >Playground</NavLink>
          <NavLink to={"/asd2"} >Database</NavLink>
        </div>
        <div className={styles.headerMenu__column}>
          <NavLink to={"/asd"} className={styles.headerMenu__column_title} >
            <p>iterate</p>
            <h1>Scetch, test <br/> and refine</h1>
          </NavLink>
          <NavLink to={"/asd1"} >Editor</NavLink>
          <NavLink to={"/asd2"} >Playground</NavLink>
          <NavLink to={"/asd2"} >Database</NavLink>
        </div>
        <div className={styles.headerMenu__column}>
          <NavLink to={"/asd"} className={styles.headerMenu__column_title} >
            <p>iterate</p>
            <h1>Scetch, test <br/> and refine</h1>
          </NavLink>
          <NavLink to={"/asd1"} >Editor</NavLink>
          <NavLink to={"/asd2"} >Playground</NavLink>
          <NavLink to={"/asd2"} >Database</NavLink>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu