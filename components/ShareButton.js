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

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <div style={myStyle}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <PinterestShareButton url={url}>
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton>
    </div>
  );
};
export default ShareButtons;
