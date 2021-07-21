import React from "react";
import style from "../styles/PostPreview.module.css";
import Link from "next/link";

const PostPreview = ({ image, slug, title }) => {
  return (
    <Link href={`/post/${slug}`}>
      <div className={style.container}>
        <p className={style.title}>{title}</p>
        <img src={image} className={style.image} />
      </div>
    </Link>
  );
};

export default PostPreview;
