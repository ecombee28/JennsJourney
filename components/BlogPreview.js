import React, { useState, useEffect } from "react";
import style from "../styles/BlogPreview.module.css";
import Link from "next/link";
import useReadTime from "../customHooks/useReadTime";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Date from "./Date";

const BlogPreview = ({ blog, commentCount, likeCount }) => {
  const { readTime } = useReadTime(blog);
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
        <div className={style.main_container}>
          <div className={style.image_container}>
            <img src={blog.mainImage} alt="pic" className={style.image} />
          </div>

          <section className={style.bottom_half_wrapper}>
            <div className={style.date_container}>
              <li className={style.list}>
                <Date date={blog.publishedAt} />
              </li>
              <li className={`${style.list} ${style.divider}`}>|</li>
              <li className={style.list}>{`${readTime} min read `}</li>
              <li className={`${style.list} ${style.divider}`}>|</li>
              <li className={style.list}>{`${commentCounts} comments `}</li>
              <li className={`${style.list} ${style.divider}`}>|</li>
              <li className={style.list}>
                <FontAwesomeIcon icon={faHeart} className={style.icon} />
              </li>
              <li className={style.list}>{`${likesCounts}`}</li>
            </div>
            <div className={style.title_container}>
              <p className={style.title}>{blog.title}</p>
            </div>

            <div className={style.middle_divider} />

            <div className={style.text_container}>
              <p className={style.body_preview}>{blog.description}</p>
            </div>
          </section>
        </div>
      </Link>
    </>
  );
};

export default BlogPreview;
