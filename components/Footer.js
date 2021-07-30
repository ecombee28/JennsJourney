import React from "react";
import style from "../styles/Footer.module.css";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a
        href="https://www.combeecreation.com/"
        target="_blank"
        className={style.copyright}
      >
        combeecreation.com
      </a>

      <div className={style.social_media}>
        <SocialIcon position={"footer"} />
      </div>
    </footer>
  );
};

export default Footer;
