import React, { useState, useEffect } from "react";
import style from "../styles/LatestBlogs.module.css";
import BlogPreview from "./BlogPreview";
import NoPostFound from "./NoPostFound";

const BlogSearch = ({
  likeCount,
  commentCount,
  allLifePost,
  allSpecialPost,
  allMotherPost,
}) => {
  const [query, setQuery] = useState("life");
  const [life, setLife] = useState(true);
  const [motherHood, setMotherHood] = useState(false);
  const [special, setSpecial] = useState(false);

  useEffect(() => {
    const changeQuery = () => {
      if (query === "life") {
        setLife(true);
        setMotherHood(false);
        setSpecial(false);
      } else if (query === "mother") {
        setLife(false);
        setMotherHood(true);
        setSpecial(false);
      } else {
        setLife(false);
        setMotherHood(false);
        setSpecial(true);
      }
    };

    changeQuery();
  }, [query]);

  return (
    <div className={style.main_container}>
      <section className={style.selector_container}>
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
      <div className={style.blog_container}>
        {query === "life" ? (
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
  );
};

export default BlogSearch;
