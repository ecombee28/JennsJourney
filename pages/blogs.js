import React, { useState, useEffect } from "react";
import Head from "next/head";
import style from "../styles/Blog.module.css";
import BlogPreview from "../components/BlogPreview";
import useMapPost from "../customHooks/useMapPost";
import NoPostFound from "../components/NoPostFound";
import {
  getAllPosts,
  getAllCommentCounts,
  getAllLikeCounts,
  getPostByCategory,
} from "../pages/api/api";

const blogs = ({
  posts,
  likeCount,
  commentCount,
  lifePost,
  specialPost,
  motherPost,
}) => {
  const allMappedPost = useMapPost(posts);
  const allLifePost = useMapPost(lifePost);
  const allSpecialPost = useMapPost(specialPost);
  const allMotherPost = useMapPost(motherPost);
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
    <>
      <Head>
        <title>Blogs | Jenns Journey</title>
        <meta name="keywords" content="web dev" />
        <link rel="shortcut icon" href="logo.ico" />
      </Head>

      <div className={style.main_container}>
        <h1 className={style.title}>Blogs</h1>

        <section className={style.selector_container}>
          <p
            className={`${style.selections} ${allPost && style.selected}`}
            onClick={() => setQuery("allpost")}
          >
            All Posts
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
          <p
            className={`${style.selections} ${life && style.selected}`}
            onClick={() => setQuery("life")}
          >
            Life
          </p>
        </section>
        <div className={style.blog_container}>
          {query === "allpost" ? (
            allMappedPost.mappedPost.length == 0 ? (
              <NoPostFound />
            ) : (
              allMappedPost.mappedPost.map((p, i) => (
                <BlogPreview
                  key={i}
                  blog={p}
                  likeCount={likeCount}
                  commentCount={commentCount}
                />
              ))
            )
          ) : query === "life" ? (
            allLifePost.mappedPost.length == 0 ? (
              <NoPostFound />
            ) : (
              allLifePost.mappedPost.map((p, i) => (
                <BlogPreview
                  key={i}
                  blog={p}
                  likeCount={likeCount}
                  commentCount={commentCount}
                />
              ))
            )
          ) : query === "mother" ? (
            allMotherPost.mappedPost.length == 0 ? (
              <NoPostFound />
            ) : (
              allMotherPost.mappedPost.map((p, i) => (
                <BlogPreview
                  key={i}
                  blog={p}
                  likeCount={likeCount}
                  commentCount={commentCount}
                />
              ))
            )
          ) : allSpecialPost.mappedPost.length == 0 ? (
            <NoPostFound />
          ) : (
            allSpecialPost.mappedPost.map((p, i) => (
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
    </>
  );
};

export const getServerSideProps = async () => {
  const getAllPost = await getAllPosts();
  const allCommentCounts = await getAllCommentCounts();
  const allLikeCounts = await getAllLikeCounts();
  const allLikePosts = await getPostByCategory("Life");
  const allSpecialPosts = await getPostByCategory("Special Needs");
  const allMotherPosts = await getPostByCategory("Motherhood");

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
        lifePost: allLikePosts,
        specialPost: allSpecialPosts,
        motherPost: allMotherPosts,
      },
    };
  }
};

export default blogs;
