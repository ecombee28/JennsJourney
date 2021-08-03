import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

export default function useMapPost(posts) {
  const [mappedPost, setMappedPost] = useState([]);

  useEffect(() => {
    const sortData = () => {
      if (posts.length > 0) {
        const imageBuilder = imageUrlBuilder({
          projectId: "jynldnuf",
          dataset: "production",
        });

        setMappedPost(
          posts.map((p, i) => {
            return {
              ...p,
              mainImage: imageBuilder.image(p.mainImage),
            };
          })
        );
      } else {
        setMappedPost([]);
      }
    };

    sortData();
  }, [posts]);

  return {
    mappedPost: mappedPost,
  };
}
