import React from "react";
import style from "../styles/Footer.module.css";
import SocialIcon from "./SocialIcon";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.signup_wrapper}>
        <p>Newsletter</p>
        <NewsletterSignup position="footer" />
      </div>

      <div className={style.social_media}>
        <p style={{ color: "var(--white)", fontSize: "1.3rem" }}>Follow</p>
        <div className={style.social_media_wrapper}>
          <SocialIcon position={"footer"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
