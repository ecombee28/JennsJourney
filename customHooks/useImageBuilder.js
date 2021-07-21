import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

export default function useImageBuilder(post) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "jynldnuf",
      dataset: "production",
    });

    setImageUrl(imageBuilder.image(post.mainImage));
  }, [post.mainImage]);

  return {
    imageUrl: imageUrl,
  };
}
