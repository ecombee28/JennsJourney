import React from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";
import LatestBlogs from "../components/LatestBlogs.js";
import useMapPost from "../customHooks/useMapPost";
import AboutComponent from "../components/AboutComponent";
import {
  getAllCommentCounts,
  getAllLikeCounts,
  getLatestPostByCategory,
} from "../lib/api";

export default function Home({
  likeCount,
  commentCount,
  lifePost,
  specialPost,
  motherPost,
}) {
  const allLifePost = useMapPost(lifePost);
  const allSpecialPost = useMapPost(specialPost);
  const allMotherPost = useMapPost(motherPost);

  return (
    <div>
      <Head>
        <title>Jenns Journey | Home</title>
        <meta name="keywords" content="web dev" />
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <div className={style.recent_blogs_container}>
        <img src="/ee.jpg" className={style.img} />
        <div className={style.landing_img_text}>
          <p>
            <span>Welcome!</span> <br />
            <br />
            Jenn’s journey is about my favorite topics which includes raising
            children with autism, managing stress, saving money, career joy and
            more!
          </p>
        </div>
      </div>

      <main className={style.main_content}>
        <p className={style.latest_title}>Latest Posts</p>
        <LatestBlogs
          likeCount={likeCount}
          commentCount={commentCount}
          allLifePost={allLifePost}
          allSpecialPost={allSpecialPost}
          allMotherPost={allMotherPost}
        />
        <AboutComponent />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const allCommentCounts = await getAllCommentCounts();
  const allLikeCounts = await getAllLikeCounts();
  const latestLikePosts = await getLatestPostByCategory("Life");
  const latestSpecialPosts = await getLatestPostByCategory("Special Needs");
  const latestMotherPosts = await getLatestPostByCategory("Motherhood");

  if (!latestLikePosts) {
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
        lifePost: latestLikePosts,
        specialPost: latestSpecialPosts,
        motherPost: latestMotherPosts,
      },
    };
  }
};
