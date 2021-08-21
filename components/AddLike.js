import React, { useState } from "react";
import style from "../styles/Addlike.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addLikes } from "../pages/api/api";

const AddLike = ({ slug, likeCount }) => {
  const [postLiked, setPostLiked] = useState(false);
  const [thankYou, setThankyou] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(likeCount);

  const liked = async () => {
    setThankyou(true);

    if (!postLiked) {
      const data = {
        slug: slug,
        likes: 1,
        number_of_likes: numberOfLikes + 1,
      };

      setNumberOfLikes(numberOfLikes + 1);

      const liked = await addLikes(data);
      setPostLiked(true);

      setTimeout(() => {
        setThankyou(false);
      }, 2000);
    }
  };

  return (
    <div className={style.main_wrapper}>
      <div className={`${style.thankyou_message} ${thankYou && style.show}`}>
        Thank You!
      </div>
      <div className={style.heart_wrapper}>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${style.icon} ${postLiked && style.liked}`}
          onClick={liked}
        />
        <p className={style.count} onClick={liked}>
          {`${numberOfLikes} loved this post`}
        </p>
      </div>
    </div>
  );
};

export default AddLike;
