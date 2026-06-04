import React from 'react'
import styles from "./SignIn.module.scss"
import Logo from "@shared/assets/images/Logo.png";
import { Button } from '@/shared/ui';
import { useSiteNavigate } from '@/shared/model';
type Props = {}

function SignIn({}: Props) {
  const navigate = useSiteNavigate();
  
  return (
    <div className={styles.signUp}>
      <div className={styles.signUp__container}>
        <div className={styles.signUp__auth}>
          <div className={styles.signUp__auth_header}>
            <img src={Logo} alt="Logo" onClick={() => navigate("MAIN")} />
            <Button
              width={68}
              height={30}
              style={{
                borderRadius: 6,
                letterSpacing: 0
              }}
              onClick={() => navigate("SIGN_UP")}
            >
              Sign in
            </Button>
          </div>
          <div className={styles.signUp__auth_footer}>
            <p className={styles.signUp__auth_footer_info}>
              The single platform to iterate, evaluate, deploy, and monitor LLMs.
            </p>
            <p className={styles.signUp__auth_footer_copyright}>
              © 2026 TEST LOGO All rights reserved.
            </p>
          </div>

        </div>
        <div className={styles.signUp__thumbnail}>

        </div>
      </div>
    </div>
  )
}

export default SignIn