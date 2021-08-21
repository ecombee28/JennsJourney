import Link from "next/link";
import React from "react";
import style from "../styles/LatestBlogs.module.css";
import BlogPreview from "./BlogPreview";
import NoPostFound from "./NoPostFound";

const BlogSearch = ({ likeCount, commentCount, post }) => {
  return (
    <div className={style.main_container}>
      <section className={style.selector_container}>
        {post ? (
          post.map((p) => (
            <BlogPreview
              key={p._id}
              blog={p}
              likeCount={likeCount}
              commentCount={commentCount}
            />
          ))
        ) : (
          <NoPostFound />
        )}
      </section>

      <Link href="/blogs">
        <button className={style.more_post_btn}>See all post</button>
      </Link>
    </div>
  );
};

export default BlogSearch;
