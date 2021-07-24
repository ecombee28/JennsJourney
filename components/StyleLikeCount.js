import React from "react";
import style from "../styles/CommentCount.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const StyleLikeCount = ({ likes }) => {
  return (
    <div className={style.main_wrapper}>
      <FontAwesomeIcon
        icon={faHeart}
        className={`${style.icon} ${style.like_icon_color}`}
      ></FontAwesomeIcon>
      <p className={style.count}>{likes}</p>
    </div>
  );
};

export default StyleLikeCount;
