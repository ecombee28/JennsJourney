import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

export default function useMapPost(posts) {
  const [mappedPost, setMappedPost] = useState([]);
  const [mappedLifePost, setMappedLifePost] = useState([]);
  const [mappedMotherPost, setMappedMotherPost] = useState([]);
  const [mappedSpecialPost, setMappedSpecialPost] = useState([]);

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

  useEffect(() => {
    const filterMapped = () => {
      setMappedLifePost(
        mappedPost.filter(function (p) {
          return p.categories[0].title === "Life";
        })
      );

      setMappedMotherPost(
        mappedPost.filter(function (p) {
          return p.categories[0].title === "Motherhood";
        })
      );

      setMappedSpecialPost(
        mappedPost.filter(function (p) {
          return p.categories[0].title === "Special Needs";
        })
      );
    };

    filterMapped();
  }, [mappedPost]);

  return {
    Post: {
      mappedPost: mappedPost,
      mappedLifePost: mappedLifePost,
      mappedMotherPost: mappedMotherPost,
      mappedSpecialPost: mappedSpecialPost,
    },
  };
}
