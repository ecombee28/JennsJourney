import React from "react";
import style from "../../styles/Post.module.css";
import BlockContent from "@sanity/block-content-to-react";
import ShareButtons from "../../components/ShareButton";
import useReadTime from "../../customHooks/useReadTime";
import useImageBuilder from "../../customHooks/useImageBuilder";
import useGetDate from "../../customHooks/useGetDate";

const Post = ({ post }) => {
  const twitterHandle = "jenn";
  const url = "https://www.facebook.com/jennifer.combee.5";
  const title = post.title;
  const tags = ["#Vacations", "#Life"];
  const { readTime } = useReadTime(post);
  const { imageUrl } = useImageBuilder(post);
  const { date } = useGetDate(post.publishedAt);

  return (
    <>
      <div className={style.main_wrapper}>
        <p className={style.title}>{post.title}</p>
        <div className={style.sub_wrapper}>
          <p className={style.date}>{date}</p>
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
        </section>
        <div className={style.share}>
          <p>If you liked this post consider sharing it</p>
          <div className={style.share_wrapper}>
            <ShareButtons
              title={title}
              url={url}
              twitterHandle={twitterHandle}
              tags={tags}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[_type == 'post'  && slug.current == "${pageSlug}"]{
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
  const url = `https://jynldnuf.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post: post,
      },
    };
  }
};

export default Post;
