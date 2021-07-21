import React from "react";
import style from "../styles/BlogPreview.module.css";
import Link from "next/link";
import useReadTime from "../customHooks/useReadTime";
import useGetDate from "../customHooks/useGetDate";

const BlogPreview = ({ blog }) => {
  const { readTime } = useReadTime(blog);
  const { date } = useGetDate(blog.publishedAt);

  return (
    <>
      <Link href={`/post/${blog.slug.current}`}>
        <div className={style.main_container}>
          <div className={style.image_container}>
            <img src={blog.mainImage} alt="pic" className={style.image} />
          </div>

          <section className={style.bottom_half_wrapper}>
            <div className={style.date_container}>
              <li className={style.list}>{`${date}`}</li>
              <li className={style.list}>{`${readTime} min read `}</li>
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
