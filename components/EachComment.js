import React, { useState, useEffect } from "react";
import style from "../styles/Comments.module.css";
import Form from "./Form";
import Date from "./Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faReply,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const EachComment = ({ comment, commentId, onsubmit, reply }) => {
  const [replay, setReplay] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replyById, setReplyById] = useState([]);

  const onSubmit = (name, comment) => {
    onsubmit(commentId, name, comment, "replay");
    setReplay(false);
  };

  useEffect(() => {
    const filterData = () => {
      const filteredArray = reply.filter((m) => {
        return m.post_id === comment.id;
      });
      setReplyById(filteredArray);
    };

    filterData();
  }, [reply]);

  return (
    <div className={style.comment_wrapper}>
      <div className={style.comment_section}>
        <li className={`${style.comment_list} ${style.avatar}`}>
          {comment.name.substr(0, 1)}
        </li>

        <li className={`${style.comment_list} ${style.name}`}>
          {comment.name}
        </li>
        <li className={`${style.comment_list} ${style.time}`}>
          <Date date={comment.time_added} />
        </li>
      </div>
      <div className={style.comment_box}>
        <li className={`${style.comment_list} ${style.comment}`}>
          {comment.comment}
        </li>
      </div>
      <div className={style.reply_wrapper}>
        <div className={style.reply_holder}>
          <p
            className={style.reply_text}
            onClick={() => setShowReplies(!showReplies)}
          >
            Replies({replyById.length})
          </p>
          {showReplies ? (
            <FontAwesomeIcon
              icon={faSortUp}
              className={`${style.icon} ${style.up}`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSortDown}
              className={`${style.icon} ${style.down}`}
            />
          )}
        </div>
        <div className={style.reply_holder}>
          <p className={style.reply_text} onClick={() => setReplay(!replay)}>
            Reply
          </p>
          <FontAwesomeIcon
            icon={faShare}
            className={`${style.icon} ${style.share}`}
          />
        </div>
      </div>

      {showReplies &&
        reply.map(
          (r) =>
            r.post_id === comment.id && (
              <div className={style.replay_section}>
                <div className={style.comment_section}>
                  <li className={`${style.comment_list} ${style.avatar}`}>
                    {r.name.substr(0, 1)}
                  </li>

                  <li className={`${style.comment_list} ${style.name}`}>
                    {r.name}
                  </li>

                  <li className={`${style.comment_list} ${style.time}`}>
                    <Date date={r.time_added} key={r.id} />
                  </li>
                </div>
                <div className={`${style.reply_box}`}>
                  <li className={`${style.comment_list} ${style.comment}`}>
                    {r.replay}
                  </li>
                </div>
              </div>
            )
        )}

      {replay && (
        <div className={style.reply_form}>
          <Form onsubmit={onSubmit} commentType={"replay"} />
        </div>
      )}
    </div>
  );
};

export default EachComment;
