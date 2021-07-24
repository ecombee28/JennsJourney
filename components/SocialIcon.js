import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import style from "../styles/SocialIcon.module.css";

const SocialIcon = ({ position }) => {
  const white = {
    color: "#fff",
  };
  return (
    <>
      <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faFacebook}
            className={`${style.icons} ${style.facebook} ${
              position === "footer" && style.white
            }`}
          />
        </li>
      </a>

      <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faTwitter}
            className={`${style.icons} ${style.twitter} ${
              position === "footer" && style.white
            }`}
          />
        </li>
      </a>

      <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faPinterest}
            className={`${style.icons} ${style.pintrest} ${
              position === "footer" && style.white
            }`}
          />
        </li>
      </a>

      <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${style.icons} ${style.instagram} ${
              position === "footer" && style.white
            }`}
          />
        </li>
      </a>
    </>
  );
};

export default SocialIcon;
