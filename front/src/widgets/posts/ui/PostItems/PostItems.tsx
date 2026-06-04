import styles from "./PostItems.module.scss";
import { ArrowIcon } from '@/shared/ui';

type Props = {
  post: {
    image: string,
    title: string,
    time: string
  }
}

function PostItems({post}: Props) {
  return (
    <div className={styles.postItems}>
      <h1>{post.title}</h1>
      <div className={styles.postItems__bottom}>
        <p>{post.time} min read</p>
        <ArrowIcon 
          width={23}
          height={23}
          color='white'
          rotate={90}
        />
      </div>
      <img src={post.image} alt="post" />
    </div>
  )
}

export default PostItems