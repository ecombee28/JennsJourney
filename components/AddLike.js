import React, { useState, useEffect } from "react";
import style from "../styles/Addlike.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addLikes, getLikesPerSlug, getAllCountsBySlug } from "../lib/api";

const AddLike = ({ slug, commentCount }) => {
  const [postLiked, setPostLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState({});
  const [getLikes, setGetLikes] = useState(0);

  const liked = async () => {
    if (!postLiked) {
      const data = {
        slug: slug,
        likes: 1,
        number_of_likes: numberOfLikes + 1,
      };

      setNumberOfLikes(numberOfLikes + 1);
      const liked = await addLikes(data);
      setPostLiked(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const getLikes = await getLikesPerSlug(slug);
      if (getLikes.Like_count.length == 0) {
        setNumberOfLikes(0);
      } else {
        setNumberOfLikes(getLikes.Like_count[0].number_of_likes);
      }
    };

    const fetchCounts = async () => {
      const getCount = await getAllCountsBySlug(slug);
      setGetLikes(getCount.count[0].likes_count);
    };

    fetchData();
    fetchCounts();
  }, [slug, postLiked]);

  return (
    <div className={style.main_wrapper}>
      <div className={style.comment_wrapper}>
        <p>{`${commentCount} comments`}</p>
      </div>
      <div className={style.heart_wrapper}>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${style.icon} ${postLiked && style.liked}`}
          onClick={liked}
        />
        <p className={style.count} onClick={liked}>
          {`${getLikes}`}
        </p>
        <p className={style.tooltip}>Loved it</p>
      </div>
    </div>
  );
};

export default AddLike;
