import React from "react";
import style from "../styles/Footer.module.css";
import SocialIcon from "./SocialIcon";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <NewsletterSignup />

        <div className={style.social_media}>
          <div className={style.social_media_wrapper}>
            <SocialIcon position={"footer"} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
