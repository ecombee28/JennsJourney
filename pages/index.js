import React from "react";
import style from "../styles/Home.module.css";
import PostPreview from "../components/PostPreview";
import BlogPreview from "../components/BlogPreview";
import HomeAbout from "../components/HomeAbout";
import useMapPost from "../customHooks/useMapPost";

export default function Home({ posts }) {
  const { Post } = useMapPost(posts);

  return (
    <div>
      <div className={style.recent_blogs_container}>
        {Post.mappedPost.slice(0, 3).map((p, index) => (
          <PostPreview
            key={index}
            image={p.mainImage}
            slug={p.slug.current}
            title={p.title}
          />
        ))}
      </div>

      <p className={style.latest_title}>Latest</p>
      <section className={style.main_content}>
        <div className={style.blogs}>
          {Post.mappedPost.map((p, index) => (
            <BlogPreview key={index} blog={p} />
          ))}
        </div>
        <div className={style.about}>
          <HomeAbout />
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const allQuery = encodeURIComponent(
    `*[_type == 'post'][0...6]|order(publishedAt desc){
    _id,
  publishedAt,
  title,
  slug,
  excerpt,
  description,
  mainImage,
  body[]{
    ...,
    children[]{
      ...,
      // Join inline reference
      _type == "authorReference" => {
        // check /studio/documents/authors.js for more fields
        "name": @.author->name,
        "slug": @.author->slug
      }
    }
  },
  "authors": authors[].author->,
  "categories": categories[]{
    "title": ^->title,
    "slug": ^->slug.current
  }
  }`
  );

  const url = `https://jynldnuf.api.sanity.io/v1/data/query/production?query=${allQuery}`;

  const allResult = await fetch(url).then((res) => res.json());

  if (!allResult.result) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: allResult.result,
      },
    };
  }
};
