import React from 'react'
import styles from "./NotFound.module.scss";
import image404 from "@shared/assets/images/Image404.png";
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router';
import { useSiteNavigate } from '@/shared/model';

type Props = {}

function NotFound({}: Props) {
  const navigate = useSiteNavigate();
  
  return (
    <div className={styles.notFound}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={image404} alt="404" />
      <Button width={150} height={40} onClick={() => navigate('MAIN')} >
        Return home
      </Button>
    </div>
  )
}

export default NotFound