import styles from "./PostsContainer.module.scss";
import PostItems from '../PostItems/PostItems';
import Image1 from "@shared/assets/images/slider1.jpg";
import Image2 from "@shared/assets/images/slider2.jpg";
import Image3 from "@shared/assets/images/slider3.jpg";

type Props = {}

function PostsContainer({}: Props) {
  const posts = [
    {
      id: 1,
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      id: 2,
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      id: 3,
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      id: 4,
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      id: 5,
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      id: 6,
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      id: 7,
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      id: 8,
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      id: 9,
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      id: 10,
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      id: 11,
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      id: 12,
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      id: 13,
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      id: 14,
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      id: 15,
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      id: 16,
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      id: 17,
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      id: 18,
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      id: 19,
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      id: 20,
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
    {
      id: 21,
      title: "The Complete Guide To OpenAi GPT-5 Models",
      image: Image1,
      time: "7",
    },
    {
      id: 22,
      title: "Why Argentic Infrastructure Will Power The Next Wave Of AI Product",
      image: Image2,
      time: "10",
    },
    {
      id: 23,
      title: "Gemini 3 vs GPT-5.1",
      image: Image3,
      time: "10",
    },
    {
      id: 24,
      title: "LoRA Fine-tuning Efficiency Under Different Loss Functions",
      image: Image1,
      time: "25",
    },
  ]
  return (
    <div className={styles.postsContainer}>
      {
        posts.map((item) => (
          <PostItems key={item.id} post={item} />
        ))
      }
    </div>
  )
}

export default PostsContainer