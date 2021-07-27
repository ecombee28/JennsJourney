import client, { previewClient } from "./sanity";
import axios from "axios";

const postFields = `
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
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields},
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getPostByCategory(category) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && $category in categories[]->title] | order(publishedAt desc){
      ${postFields},
      
    }`,
    { category }
  );
  return data;
}

export async function getLatestPostByCategory(category) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && $category in categories[]->title][0...3] | order(publishedAt desc){
      ${postFields},
      
    }`,
    { category }
  );
  return data;
}

export async function getAllPosts() {
  const data = await client.fetch(`*[_type == "post"]| order(publishedAt desc){
    ${postFields},
    body
  }`);
  return data;
}

export async function getLatestPosts() {
  const data =
    await client.fetch(`*[_type == "post"][0...6]| order(publishedAt desc){
      ${postFields},
      body
    }`);
  return data;
}

export async function getCommentsBySlug(slug) {
  const fetchComments = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getcomments`,
    {
      slug: slug,
    }
  );

  const fetchReplays = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getallreplays`,
    {
      slug: slug,
    }
  );

  return {
    comments: fetchComments.data.comments,
    replays: fetchReplays.data.replays,
  };
}

export async function addComments(data) {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/addcomment`,
    {
      slug: data.slug,
      name: data.name,
      comment: data.comment,
    }
  );

  return fetchData.data;
}

export async function addReplays(data) {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/addreplay`,
    {
      post_id: data.post_id,
      slug: data.slug,
      name: data.name,
      replay: data.replay,
    }
  );

  return fetchData.data;
}

export async function addLikes(data) {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/addlike`,
    {
      slug: data.slug,
      number_of_likes: data.likes,
      number_of_likes: data.number_of_likes,
    }
  );

  return fetchData.data;
}

export async function getLikesPerSlug(slug) {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getlikecount`,
    {
      slug: slug,
    }
  );

  return fetchData.data;
}

export async function getAllCountsBySlug(slug) {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getcounts`,
    {
      slug: slug,
    }
  );

  const commentCount = await fetchData.data.comment_count[0].comment_count;
  const likeCounts = await fetchData.data.like_count;

  return {
    comment_count: commentCount,
    like_count: likeCounts,
  };
}

export async function getAllCommentCounts() {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getallcommentcounts`
  );

  return fetchData.data.comment_count;
}

export async function getAllLikeCounts() {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getalllikecounts`
  );

  return fetchData.data.like_count;
}

export async function getAllReplaysForSlug(slug) {
  const fetchData = await axios.post(
    `https://combeecreations.com/emdbapi/public/api/blog/getallreplays`,
    {
      slug: slug,
    }
  );

  return fetchData.data;
}
