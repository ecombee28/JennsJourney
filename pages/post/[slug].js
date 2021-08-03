import React, { useEffect, useState } from "react";
import Head from "next/head";
import style from "../../styles/Post.module.css";
import BlockContent from "@sanity/block-content-to-react";
import ShareButtons from "../../components/ShareButton";
import useReadTime from "../../customHooks/useReadTime";
import useImageBuilder from "../../customHooks/useImageBuilder";
import { getPostBySlug, getAllCountsBySlug } from "../../lib/api";
import Comments from "../../components/Comments";
import AddLike from "../../components/AddLike";
import Date from "../../components/Date";
import Body from "../../components/Body";

const Post = ({ post, likeCrt }) => {
  const [hashTags, setHashTags] = useState([]);
  const [photoLink, setPhotoLink] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [unsplashHref, setUnsplashHref] = useState(null);
  const twitterHandle = "@JennsJourney21";
  const url = `https://jennsjourney.net/post/${post.slug.current}`;
  const title = post.title;
  const tags = ["#Vacations", "#Life"];
  const { readTime } = useReadTime(post);
  const { imageUrl } = useImageBuilder(post);

  useEffect(() => {
    const generateHasTags = () => {
      post.categories.map((c) => {
        const tag = `#${c.title}`;
        setHashTags(...hashTags, tag);
      });
    };

    generateHasTags();
  }, [post]);

  useEffect(() => {
    const getHyperlink = () => {
      const hyperlink = post.mainImage_ref.split(" ");
      const photographersLink = hyperlink[3].substr(
        6,
        hyperlink[3].indexOf(">") - 7
      );

      const firstName = hyperlink[3].substr(hyperlink[3].indexOf(">") + 1);
      const lastName = hyperlink[4].substr(0, hyperlink[4].indexOf("<"));
      const name = `${firstName} ${lastName}`;
      const unsplashHref = hyperlink[7].substr(
        6,
        hyperlink[7].indexOf(">") - 7
      );

      setPhotoName(name);
      setPhotoLink(photographersLink);
      setUnsplashHref(unsplashHref);
    };

    //If the post has a valid hyperlink call getHyperlink()
    post.mainImage_ref && getHyperlink();
  }, [post]);

  return (
    <>
      <Head>
        <title>{post.title} | Jenns Journey</title>
        <meta name="keywords" content="web dev" />
        <link rel="shortcut icon" href="logo.ico" />
      </Head>
      <div className={style.main_wrapper}>
        <p className={style.title}>{post.title}</p>
        <div className={style.sub_wrapper}>
          <p className={style.date}>
            <Date date={post.publishedAt} />
          </p>
          <p className={style.date}>|</p>
          <p className={style.date}>{`${readTime} min read`}</p>
        </div>
        <img src={imageUrl} className={style.landing_image} />
        {photoLink && (
          <figcaption className={style.main_img_link}>
            Photo by
            <a href={photoLink} target="_blank">
              {` ${photoName} `}
            </a>
            on
            <a href={unsplashHref} target="_blank">
              {" "}
              Unsplash
            </a>
          </figcaption>
        )}

        <section className={style.blog_container}>
          <Body blocks={post.body} />
          <div className={style.share}>
            <div className={style.heart_container}>
              <AddLike slug={post.slug.current} likeCount={likeCrt} />
            </div>

            <div className={style.share_wrapper}>
              <p className={style.share_wrapper_text}>Share: </p>
              <ShareButtons
                title={title}
                url={url}
                twitterHandle={twitterHandle}
                tags={tags}
              />
            </div>
          </div>

          <Comments slug={post.slug.current} />
        </section>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const getPost = await getPostBySlug(pageSlug);
  const counts = await getAllCountsBySlug(pageSlug);

  if (!getPost) {
    return {
      props: {
        post: [],
      },
    };
  } else {
    return {
      props: {
        post: getPost,
        commentCrt: counts.comment_count,
        likeCrt: counts.like_count,
      },
    };
  }
};

export default Post;
