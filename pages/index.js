import React from "react";
import style from "../styles/Home.module.css";
import PostPreview from "../components/PostPreview";
import BlogPreview from "../components/BlogPreview";
import HomeAbout from "../components/HomeAbout";
import useMapPost from "../customHooks/useMapPost";
import {
  getLatestPosts,
  getAllCommentCounts,
  getAllLikeCounts,
} from "../lib/api";

export default function Home({ posts, likeCount, commentCount }) {
  const { Post } = useMapPost(posts);

  return (
    <div>
      <div className={style.recent_blogs_container}>
        {Post.mappedPost.slice(0, 3).map((p, index) => (
          <PostPreview
            key={index}
            image={p.mainImage}
            slug={p.slug.current}
            title={p.title}
          />
        ))}
      </div>

      <p className={style.latest_title}>Latest</p>
      <section className={style.main_content}>
        <div className={style.blogs}>
          {Post.mappedPost.map((p, index) => (
            <BlogPreview
              key={index}
              blog={p}
              likeCount={likeCount}
              commentCount={commentCount}
            />
          ))}
        </div>
        <div className={style.about}>
          <HomeAbout />
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const getAllPost = await getLatestPosts();
  const allCommentCounts = await getAllCommentCounts();
  const allLikeCounts = await getAllLikeCounts();

  if (!getAllPost) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: getAllPost,
        likeCount: allLikeCounts,
        commentCount: allCommentCounts,
      },
    };
  }
};
