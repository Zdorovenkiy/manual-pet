import styles from "./Posts.module.scss";
import PostTabs from "../PostTabs/PostTabs";
import PostsContainer from "../PostsContainer/PostsContainer";
import PostLoadMore from "../PostLoadMore/PostLoadMore";

type Props = {}

function Posts({}: Props) {

  return (
    <div className={styles.posts}>
      <div className={styles.posts__container}>
        <PostTabs />
        <PostsContainer />
        <PostLoadMore />
      </div>
    </div>
  )
}

export default Posts