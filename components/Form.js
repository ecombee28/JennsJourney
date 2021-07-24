import React, { useState } from "react";
import style from "../styles/Form.module.css";

export default function Form({ onsubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const checkName = (e) => {
    setName(e.target.value);
  };

  const checkComment = (e) => {
    setComment(e.target.value);
  };

  const submit = () => {
    if (name && comment) {
      onsubmit(name, comment);
      setName("");
      setComment("");
    } else {
      console.log("error");
    }
  };

  return (
    <div className={style.main_container}>
      <div className={style.input_wrapper}>
        <label className={style.label}>Name</label>
        <input
          type="text"
          className={style.input}
          value={name}
          onChange={checkName}
        />
      </div>
      <div className={style.input_wrapper}>
        <label className={style.label}>Comment</label>
        <textarea
          className={`${style.input} ${style.comment}`}
          value={comment}
          onChange={checkComment}
        />
      </div>
      <button className={style.btn} onClick={submit}>
        Post Comment
      </button>
    </div>
  );
}
