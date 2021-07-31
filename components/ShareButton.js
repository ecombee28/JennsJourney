import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const myStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
};

const shadowStyle = {
  WebkitBoxShadow: "none",
  boxShadow: "none",
};

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <div style={myStyle}>
      <FacebookShareButton url={url} style={shadowStyle}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
        style={shadowStyle}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
    </div>
  );
};
export default ShareButtons;
