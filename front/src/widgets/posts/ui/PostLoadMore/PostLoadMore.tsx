import { Button } from '@/shared/ui'
import styles from "./PostLoadMore.module.scss";
import { buttonStyles } from '@/shared/model/styles/buttonStyles';

type Props = {}

function PostLoadMore({}: Props) {
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
      >
        Load more
      </Button>
    </div>
  )
}

export default PostLoadMore