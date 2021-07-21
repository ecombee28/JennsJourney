import React from "react";
import style from "../styles/MiniBlogPreview.module.css";
import useReadTime from "../customHooks/useReadTime";
import useGetDate from "../customHooks/useGetDate";
import Link from "next/link";

const MiniBlogPreview = ({ blog }) => {
  const { date } = useGetDate(blog._createdAt);
  const { readTime } = useReadTime(blog);

  return (
    <>
      <Link href={`/post/${blog.slug.current}`}>
        <div className={style.blog_container}>
          <img src={blog.mainImage} className={style.image} />
          <div className={style.name_wrapper}>
            <p className={style.text}>{date}</p>
            <p
              className={`${style.text} ${style.read_time}`}
            >{`${readTime} min`}</p>
          </div>
          <p className={style.title}>{blog.title}</p>
        </div>
      </Link>
    </>
  );
};

export default MiniBlogPreview;
