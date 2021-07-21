import { useEffect, useState } from "react";

export default function useReadTime(blog) {
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    let totalWords = "";

    blog.body.map((t) => {
      t.children ? (totalWords += t.children[0].text) : (totalWords += 30);
    });

    setReadTime(Math.round(totalWords.length / 270));
  }, [blog]);

  return {
    readTime: readTime,
  };
}
