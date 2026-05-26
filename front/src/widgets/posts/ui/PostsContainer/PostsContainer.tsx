import styles from "./PostsContainer.module.scss";
import PostItems from '../PostItems/PostItems';
import Image1 from "@shared/assets/slider1.jpg";
import Image2 from "@shared/assets/slider2.jpg";
import Image3 from "@shared/assets/slider3.jpg";

type Props = {}

function PostsContainer({}: Props) {
  const posts = [
    {
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
  ]
  return (
    <div className={styles.postsContainer}>
      {
        posts.map((item) => (
          <PostItems post={item} />
        ))
      }
    </div>
  )
}

export default PostsContainer