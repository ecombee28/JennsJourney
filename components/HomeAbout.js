import React from "react";
import style from "../styles/HomeAbout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div className={style.main_container}>
      <div className={style.follow}>
        <p className={style.title}>follow</p>
        <section className={style.icon_container}>
          <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
            <div className={style.icon_holder}>
              <FontAwesomeIcon icon={faFacebookF} className={style.icons} />
            </div>
          </a>

          <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
            <div className={style.icon_holder}>
              <FontAwesomeIcon icon={faTwitter} className={style.icons} />
            </div>
          </a>

          <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
            <div className={style.icon_holder}>
              <FontAwesomeIcon icon={faInstagram} className={style.icons} />
            </div>
          </a>

          <a href="https://www.facebook.com/jennifer.combee.5" target="_blank">
            <div className={style.icon_holder}>
              <FontAwesomeIcon icon={faPinterestP} className={style.icons} />
            </div>
          </a>
        </section>
      </div>

      <div className={style.about}>
        <p className={style.title}>about me</p>
        <img src="/about_img2.jpg" className={style.about_image} />
        <p className={style.text}>
          Here at Jenn's Journey I will share insight about my favorite topics
          such as my experience raising children with autism, managing stress,
          saving money, career joy and much more!
        </p>
        <Link href="">
          <p className={`${style.text} ${style.learn_more}`}>Learn more..</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeAbout;
