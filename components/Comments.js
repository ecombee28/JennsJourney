import React, { useState, useEffect } from "react";
import style from "../styles/Comments.module.css";
import Form from "./Form";
import EachComment from "./EachComment";
import {
  getCommentsBySlug,
  addComments,
  getAllReplaysForSlug,
  addReplays,
} from "../pages/api/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Comments({ slug }) {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [commentAdded, setCommentAdded] = useState(false);
  const colors = [
    "#D448A0",
    "#EA54F6",
    "#D45748",
    "#A941E0",
    "#541D40",
    "#33CBD4",
    "#278287",
    "#D46053",
    "#A03DD4",
    "#463DD4",
    "#33C5D4",
    "#D43399",
    "#943270",
    "#BA3F8D",
    "#E06534",
  ];

  const onSubmit = async (post_id, name, comment, type) => {
    const commentData = {
      slug: slug,
      name: name,
      comment: comment,
    };

    const replayData = {
      post_id: post_id,
      slug: slug,
      name: name,
      replay: comment,
    };

    if (type === "replay") {
      const addR = await addReplays(replayData);
    } else if (type === "comment") {
      const addC = await addComments(commentData);
    }

    setCommentAdded(true);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const getComments = await getCommentsBySlug(slug);
      const allReplays = await getAllReplaysForSlug(slug);

      setComments(getComments);
      setReplies(allReplays.replays);
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
          <Form onsubmit={onSubmit} commentType={"comment"} />

          <h2 style={{ fontSize: "1.3rem" }}>Here's what others have to say</h2>
          <p>{`comments (${comments.comments.length})`}</p>
          <div className={style.main_comment_display}>
            {comments.comments.length == 0 ? (
              <h3>Be the first to comment</h3>
            ) : (
              comments.comments.map((c) => (
                <EachComment
                  key={c.id}
                  comment={c}
                  commentId={c.id}
                  onsubmit={onSubmit}
                  reply={comments.replays}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
