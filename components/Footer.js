import React from "react";
import style from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.social_media}>
        <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
          <li className={style.nav_list}>
            <FontAwesomeIcon icon={faFacebook} className={style.icons} />
          </li>
        </a>

        <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
          <li className={style.nav_list}>
            <FontAwesomeIcon icon={faTwitter} className={style.icons} />
          </li>
        </a>

        <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
          <li className={style.nav_list}>
            <FontAwesomeIcon icon={faPinterest} className={style.icons} />
          </li>
        </a>

        <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
          <li className={style.nav_list}>
            <FontAwesomeIcon icon={faInstagram} className={style.icons} />
          </li>
        </a>
      </div>
    </div>
  );
};

export default Footer;
