import React, { useState, useEffect } from "react";
import style from "../styles/MainBlogPreview.module.css";
import Link from "next/link";
import useReadTime from "../customHooks/useReadTime";
import useGetDate from "../customHooks/useGetDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MainBlogPreview({ blog, commentCount, likeCount }) {
  const { readTime } = useReadTime(blog);
  const { date } = useGetDate(blog.publishedAt);
  const [commentCounts, setCommentCounts] = useState(0);
  const [likesCounts, setLikesCounts] = useState(0);

  // this will get and set the state of the commentCount and likeCount
  useEffect(() => {
    const comment = commentCount.find((e) => e.slug === blog.slug.current);
    comment ? setCommentCounts(comment.count) : setCommentCounts(0);

    const likes = likeCount.find((l) => l.slug === blog.slug.current);
    likes ? setLikesCounts(likes.number_of_likes) : setLikesCounts(0);
  }, [blog]);

  return (
    <>
      <Link href={`/post/${blog.slug.current}`}>
        <main className={style.main_container}>
          <h1 className={style.title}>{blog.title}</h1>
          <div className={style.date_container}>
            <li className={style.list}>{`${date}`}</li>
            <li className={`${style.list} ${style.divider}`}>|</li>
            <li className={style.list}>{`${readTime} min read `}</li>
            <li className={`${style.list} ${style.divider}`}>|</li>
            <li className={style.list}>{`${commentCounts} comments `}</li>
            <li className={`${style.list} ${style.divider}`}>|</li>
            <li className={style.list}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "var(--like)" }}
              />
            </li>
            <li className={style.list}>{`${likesCounts}`}</li>
          </div>
          <img
            src={blog.mainImage}
            alt="main_img"
            className={style.main_image}
          />
          <section className={style.body_wrapper}></section>
        </main>
      </Link>
    </>
  );
}

export default MainBlogPreview;
