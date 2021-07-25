import React, { useState, useEffect } from "react";
import style from "../styles/Comments.module.css";
import Form from "./Form";
import EachComment from "./EachComment";
import { getCommentsBySlug, addComments } from "../lib/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Comments({ slug, update }) {
  const [comments, setComments] = useState([]);
  const [commentAdded, setCommentAdded] = useState(false);

  const onSubmit = async (name, comment) => {
    const data = {
      slug: slug,
      name: name,
      comment: comment,
    };

    const add = await addComments(data);

    setCommentAdded(true);
    update();
  };

  useEffect(() => {
    const fetchComments = async () => {
      const getComments = await getCommentsBySlug(slug);
      setComments(getComments);
    };

    fetchComments();
    setCommentAdded(false);
  }, [slug, commentAdded]);

  return (
    <>
      {comments.length == 0 ? (
        <>
          <p>Loading</p>
          <Loader type="ThreeDots" color="#2c82d3" height={40} width={40} />
        </>
      ) : (
        <div className={style.main_container}>
          <h2 className={style.title}>Leave a comment</h2>
          <Form onsubmit={onSubmit} />

          <div>
            <h2>Here's what others have to say</h2>
            <p>{`comments (${comments.comments.length})`}</p>
            <div className={style.main_comment_display}>
              {!comments.comments.length ? (
                <h3>Be the first to comment</h3>
              ) : (
                comments.comments.map((c) => (
                  <EachComment key={c.id} comment={c} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
