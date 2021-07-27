import React, { useState } from "react";
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

const Post = ({ post, likeCrt }) => {
  const twitterHandle = "jenn";
  const url = "https://www.facebook.com/jennifer.combee.5";
  const title = post.title;
  const tags = ["#Vacations", "#Life"];
  const { readTime } = useReadTime(post);
  const { imageUrl } = useImageBuilder(post);

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
        <section className={style.blog_container}>
          <BlockContent
            blocks={post.body}
            projectId="jynldnuf"
            dataset="production"
          />
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
