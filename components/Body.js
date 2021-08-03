import React from "react";
import getYouTubeId from "get-youtube-id";
import PortableText from "@sanity/block-content-to-react";
import style from "../styles/Post.module.css";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return (
        <div className={style.youtube_container}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className={style.youtube}
          ></iframe>
        </div>
      );
    },
  },
};
export default function Body({ blocks }) {
  return (
    <PortableText
      blocks={blocks}
      serializers={serializers}
      projectId="jynldnuf"
      dataset="production"
    />
  );
}
