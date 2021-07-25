import React, { useState, useRef, useEffect } from "react";
import style from "../styles/Form.module.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

export default function Form({ onsubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const node = useRef();

  const checkName = (e) => {
    setName(e.target.value);
  };

  const checkComment = (e) => {
    setComment(e.target.value);
  };

  const addEmoji = (e) => {
    let r = comment + e.native;
    setComment(r);
    setOpenEmoji(false);
  };

  const submit = () => {
    setNameError(false);
    setCommentError(false);
    if (name && comment) {
      onsubmit(name, comment);
      setName("");
      setComment("");
    } else {
      !name && setNameError(true);
      !comment && setCommentError(true);
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    // outside click
    setOpenEmoji(false);
  };

  return (
    <div className={style.main_container}>
      <div className={style.input_wrapper}>
        <span>
          <label className={style.label}>Name</label>
          <label className={`${style.error} ${nameError && style.show}`}>
            Must be filled out!
          </label>
        </span>

        <input
          type="text"
          className={style.input}
          value={name}
          onChange={checkName}
          placeholder="Name"
          required
        />
      </div>
      <div className={style.input_wrapper}>
        <span>
          <label className={style.label}>Comment</label>
          <label className={`${style.error} ${commentError && style.show}`}>
            Must be filled out!
          </label>
        </span>

        <FontAwesomeIcon
          icon={faSmile}
          className={style.emoji}
          onClick={() => setOpenEmoji(true)}
        />
        <div
          className={`${style.emoji_picker} ${openEmoji && style.open}`}
          ref={node}
        >
          <Picker onSelect={addEmoji} />
        </div>

        <textarea
          className={`${style.input} ${style.comment}`}
          value={comment}
          onChange={checkComment}
          placeholder="Comment"
          required
        />
      </div>
      <button className={style.btn} onClick={submit}>
        Post Comment
      </button>
    </div>
  );
}
