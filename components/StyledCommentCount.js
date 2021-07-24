import React from "react";
import style from "../styles/CommentCount.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const CommentCount = ({ comments }) => {
  return (
    <div className={style.main_wrapper}>
      <FontAwesomeIcon
        icon={faComment}
        className={`${style.icon} ${style.comment_icon_color}`}
      />
      <p className={style.count}>{comments}</p>
    </div>
  );
};

export default CommentCount;
