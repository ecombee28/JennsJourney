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
  return (
    <>
      <a
        href="https://www.facebook.com/Jenns-Journey-105553521791785"
        target="_blank"
      >
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faFacebook}
            className={`${position === "footer" ? style.footer : style.icons} ${
              style.facebook
            } `}
          />
        </li>
      </a>

      <a href="https://twitter.com/JennsJourney21" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faTwitter}
            className={`${
              position === "footer" ? style.footer : style.icons
            }  ${style.twitter} `}
          />
        </li>
      </a>

      <a href="https://www.pinterest.com/jennsjourney2021" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faPinterest}
            className={`${
              position === "footer" ? style.footer : style.icons
            }  ${style.pintrest} 
             
            `}
          />
        </li>
      </a>

      {/* <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
        <li className={style.icon_list}>
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${
              position === "footer" ? style.footer : style.icons
            }  ${style.instagram}
              
            `}
          />
        </li>
      </a>  */}
    </>
  );
};

export default SocialIcon;
