import React from 'react'
import styles from "./PostPage.module.scss"
import Image1 from "@shared/assets/images/slider1.jpg";
import { PostMain } from '@/widgets/postMain';
import { PostArticle } from '@/widgets/postArticle';

type Props = {}

function PostPage({}: Props) {

  const post = {
      id: 1,
      title: "AI Agent Observability: Why Latency Charts Miss The Failures That Matter",
      description: "Standard observability watches whether the service is up. Agent observability has to watch whether the agent is doing the right thing.",
      author: "Nilesh Barla",
      date: "May 27, 2026",
      cleanHTML: `
        <p class="p_danger">
        The foundational research on LLM-as-a-judge found that GPT-4 agrees with human evaluators more than 80% of the time. This is the same rate at which humans agree with each other.

        Lianmin Zheng and colleagues at UC Berkeley published that finding in 2023, and it made automated LLM evaluation mainstream almost overnight. If a language model could approximate human judgment at human-level consistency, the case for replacing annotation pipelines with API calls would be settled.
        <br>
        The research that followed has been less reassuring. Studies published in 2025 and early 2026 have systematically documented where LLM judges fail, why they fail, and how often. No judge evaluated by the RAND Corporation's research team was uniformly reliable across benchmarks. Frontier models exceeded 50% error rates on advanced bias tests, according to Hongli Zhou and colleagues' JudgeBiasBench. Simple text formatting changes disrupted consistency among judges who passed standard accuracy checks.

        LLM-as-a-judge works. The 80% finding is real. But it comes with conditions most production evaluation pipelines do not fully preserve, and the research is now specific enough to act on.
        </p>

        <h1 id="head1" class="h1_danger">
          Why Did LLM-as-a-Judge Become the Default for LLM Evaluation?
        </h1>

        <h1 class="h1_danger">
          Three Failure Modes That Have Since Been Documented
        </h1>

        <p class="p_danger">
        The field has converged on a taxonomy of failure. Bo Yang and colleagues, who published FairJudge in February 2026, identified three compounding limitations that explain why LLM-as-a-judge breaks down in production.
        </p>

        <h1 id="head2" class="h1_danger">
          Three Failure Modes That Have Since Been Documented
        </h1>

        <p class="p_danger">
        The foundational research on LLM-as-a-judge found that GPT-4 agrees with human evaluators more than 80% of the time. This is the same rate at which humans agree with each other.

        Lianmin Zheng and colleagues at UC Berkeley published that finding in 2023, and it made automated LLM evaluation mainstream almost overnight. If a language model could approximate human judgment at human-level consistency, the case for replacing annotation pipelines with API calls would be settled.
        <br>
        The research that followed has been less reassuring. Studies published in 2025 and early 2026 have systematically documented where LLM judges fail, why they fail, and how often. No judge evaluated by the RAND Corporation's research team was uniformly reliable across benchmarks. Frontier models exceeded 50% error rates on advanced bias tests, according to Hongli Zhou and colleagues' JudgeBiasBench. Simple text formatting changes disrupted consistency among judges who passed standard accuracy checks.

        LLM-as-a-judge works. The 80% finding is real. But it comes with conditions most production evaluation pipelines do not fully preserve, and the research is now specific enough to act on.
        </p>

        `,
      image: Image1,
      time: "7",
    };

  return (
    <div className={styles.postPage}>
      <div className={styles.postPage__container}>
        <PostMain post={post} />
        <PostArticle cleanHTML={post.cleanHTML}/>
      </div>
    </div>
  )
}

export default PostPage