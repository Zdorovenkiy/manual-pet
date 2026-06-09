import { useSiteNavigate } from "@/shared/model";
import styles from "./PostItems.module.scss";
import { ArrowIcon } from '@/shared/ui';

type Props = {
  post: {
    id: number,
    image: string,
    title: string,
    time: string
  }
}

function PostItems({post}: Props) {
  const navigate = useSiteNavigate();

  return (
    <div className={styles.postItems} onClick={() => navigate("POST", post.id)}>
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