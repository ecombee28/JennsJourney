import React, { useState, useEffect } from "react";
import style from "../styles/Blog.module.css";
import BlogPreview from "../components/BlogPreview";
import useMapPost from "../customHooks/useMapPost";
import NoPostFound from "../components/NoPostFound";
import { getAllPosts, getAllCommentCounts, getAllLikeCounts } from "../lib/api";

const blogs = ({ posts, likeCount, commentCount }) => {
  const { Post } = useMapPost(posts);
  const [query, setQuery] = useState("allpost");
  const [allPost, setAllPost] = useState(true);
  const [life, setLife] = useState(false);
  const [motherHood, setMotherHood] = useState(false);
  const [special, setSpecial] = useState(false);

  useEffect(() => {
    const changeQuery = () => {
      if (query === "allpost") {
        setAllPost(true);
        setLife(false);
        setMotherHood(false);
        setSpecial(false);
      } else if (query === "life") {
        setAllPost(false);
        setLife(true);
        setMotherHood(false);
        setSpecial(false);
      } else if (query === "mother") {
        setAllPost(false);
        setLife(false);
        setMotherHood(true);
        setSpecial(false);
      } else {
        setAllPost(false);
        setLife(false);
        setMotherHood(false);
        setSpecial(true);
      }
    };

    changeQuery();
  }, [query]);

  return (
    <div>
      <h1 className={style.title}>Blogs</h1>
      <section className={style.selector_container}>
        <p
          className={`${style.selections} ${allPost && style.selected}`}
          onClick={() => setQuery("allpost")}
        >
          All Posts
        </p>
        <p
          className={`${style.selections} ${life && style.selected}`}
          onClick={() => setQuery("life")}
        >
          Life
        </p>
        <p
          className={`${style.selections} ${motherHood && style.selected}`}
          onClick={() => setQuery("mother")}
        >
          Motherhood
        </p>
        <p
          className={`${style.selections} ${special && style.selected}`}
          onClick={() => setQuery("special")}
        >
          Special Needs
        </p>
      </section>
      <div className={style.main_container}>
        {query === "allpost" ? (
          Post.mappedPost.length == 0 ? (
            <NoPostFound />
          ) : (
            Post.mappedPost.map((p, i) => (
              <BlogPreview
                key={i}
                blog={p}
                likeCount={likeCount}
                commentCount={commentCount}
              />
            ))
          )
        ) : query === "life" ? (
          Post.mappedLifePost.length == 0 ? (
            <NoPostFound />
          ) : (
            Post.mappedLifePost.map((p, i) => (
              <BlogPreview
                key={i}
                blog={p}
                likeCount={likeCount}
                commentCount={commentCount}
              />
            ))
          )
        ) : query === "mother" ? (
          Post.mappedMotherPost.length == 0 ? (
            <NoPostFound />
          ) : (
            Post.mappedMotherPost.map((p, i) => (
              <BlogPreview key={p.i} blog={p} />
            ))
          )
        ) : Post.mappedSpecialPost.length == 0 ? (
          <NoPostFound />
        ) : (
          Post.mappedSpecialPost.map((p, i) => (
            <BlogPreview
              key={i}
              blog={p}
              likeCount={likeCount}
              commentCount={commentCount}
            />
          ))
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const getAllPost = await getAllPosts();
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

export default blogs;
