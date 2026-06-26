import { Button } from '@/shared/ui'
import styles from "./PostLoadMore.module.scss";
import { buttonStyles } from '@/shared/model/styles/buttonStyles';
import type { ComponentProps } from 'react';
import { useSiteNavigate } from '@/shared/model';

interface Props extends ComponentProps<typeof Button> {}

function PostLoadMore({}: Props) {
  const navigate = useSiteNavigate();

  return (
    <div className={styles.postLoadMore}>
      <Button
        width={155}
        color={buttonStyles.COLOR_DARK}
        background={buttonStyles.BACKGROUND_LIGHT}
        style={{
          border: `1px solid ${buttonStyles.BORDER_GREY}`,
          letterSpacing: "2px"
        }}
        onClick={() => navigate('CATALOG')}
      >
        Load more
      </Button>
    </div>
  )
}

export default PostLoadMore