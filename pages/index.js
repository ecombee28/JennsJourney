import React from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";
import LatestBlogs from "../components/LatestBlogs.js";
import useMapPost from "../customHooks/useMapPost";
import AboutComponent from "../components/AboutComponent";
import Link from "next/link";
import {
  getAllCommentCounts,
  getAllLikeCounts,
  getLatestPost,
} from "../pages/api/api";

export default function Home({ likeCount, commentCount, latestPost }) {
  const mappedLatestPost = useMapPost(latestPost);

  return (
    <div>
      <Head>
        <title>Jenns Journey | Home</title>
        <meta name="keywords" content="web dev" />
        <link rel="shortcut icon" href="logo.ico" />
        <base target="_blank" />
      </Head>
      <div className={style.recent_blogs_container}>
        <img src="/landing_image.jpg" className={style.img} />
        <div className={style.landing_img_text}>
          <p>Welcome!</p>
          <Link href="/about">
            <button className={style.hero_btn}>About Jenns Journey</button>
          </Link>
        </div>
      </div>

      <main className={style.main_content}>
        <p className={style.latest_title}>Latest Posts</p>
        <LatestBlogs
          likeCount={likeCount}
          commentCount={commentCount}
          post={mappedLatestPost.mappedPost}
        />
      </main>
      <AboutComponent />
    </div>
  );
}

export const getServerSideProps = async () => {
  const allCommentCounts = await getAllCommentCounts();
  const allLikeCounts = await getAllLikeCounts();
  const latestPosts = await getLatestPost();

  if (!latestPosts) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        likeCount: allLikeCounts,
        commentCount: allCommentCounts,
        latestPost: latestPosts,
      },
    };
  }
};
