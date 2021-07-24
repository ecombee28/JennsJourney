import React from "react";
import style from "../styles/Comments.module.css";
import useGetDate from "../customHooks/useGetDate";

const EachComment = ({ comment }) => {
  const { date } = useGetDate(comment.time_added);

  return (
    <div className={style.comment_wrapper}>
      <p className={style.avatar}>{comment.name.substr(0, 1)}</p>
      <div className={style.comment_section}>
        <li className={`${style.comment_list} ${style.name}`}>
          {comment.name}
        </li>
        <li className={`${style.comment_list} ${style.time}`}>{date}</li>
        <li className={`${style.comment_list} ${style.comment}`}>
          {comment.comment}
        </li>
      </div>
    </div>
  );
};

export default EachComment;
