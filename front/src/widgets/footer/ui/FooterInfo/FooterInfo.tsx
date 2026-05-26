import { NavLink } from "react-router-dom";
import styles from "./FooterInfo.module.scss";

type Props = {}

function FooterInfo({}: Props) {
  return (
    <div className={styles.footerInfo}>
      <div className={styles.footerInfo__column}>
        <p className={styles.footerInfo__column_title}>Pillars</p>
        <NavLink to={"/asd1"} >Iterate</NavLink>
        <NavLink to={"/asd1"} >Evaluate</NavLink>
        <NavLink to={"/asd1"} >Deploy</NavLink>
        <NavLink to={"/asd1"} >Monitor</NavLink>
      </div>
      <div className={styles.footerInfo__column}>
        <p className={styles.footerInfo__column_title}>Products</p>
        <NavLink to={"/asd1"} >Editor</NavLink>
        <NavLink to={"/asd1"} >Playground</NavLink>
        <NavLink to={"/asd1"} >Evaluations</NavLink>
        <NavLink to={"/asd1"} >Datasets</NavLink>
        <NavLink to={"/asd1"} >Deployments</NavLink>
        <NavLink to={"/asd1"} >Logs</NavLink>
        <NavLink to={"/asd1"} >Analytics</NavLink>
        <NavLink to={"/asd1"} >Gateway</NavLink>
      </div>
      <div className={styles.footerInfo__column}>
        <p className={styles.footerInfo__column_title}>Company</p>
        <NavLink to={"/asd1"} >Labs</NavLink>
        <NavLink to={"/asd1"} >Applied</NavLink>
        <NavLink to={"/asd1"} >Pricing</NavLink>
        <NavLink to={"/asd1"} >Blog</NavLink>
        <NavLink to={"/asd1"} >Careers</NavLink>
        <NavLink to={"/asd1"} >Book a Demo</NavLink>
        <NavLink to={"/asd1"} >Wikipedia</NavLink>
      </div>
      <div className={styles.footerInfo__column}>
        <p className={styles.footerInfo__column_title}>Resources</p>
        <NavLink to={"/asd1"} >Documentation</NavLink>
        <NavLink to={"/asd1"} >API Reference</NavLink>
        <NavLink to={"/asd1"} >DPA</NavLink>
        <NavLink to={"/asd1"} >Privacy Policy</NavLink>
        <NavLink to={"/asd1"} >Terms of Service</NavLink>
        <NavLink to={"/asd1"} >Report Vulnerability</NavLink>
      </div>
      <div className={styles.footerInfo__column}>
        <p className={styles.footerInfo__column_title}>Connect</p>
        <NavLink to={"/asd1"} >GitHub</NavLink>
        <NavLink to={"/asd1"} >X (Twitter)</NavLink>
        <NavLink to={"/asd1"} >Linkedln</NavLink>
        <NavLink to={"/asd1"} >YouTube</NavLink>
      </div>
    </div>
  )
}

export default FooterInfo