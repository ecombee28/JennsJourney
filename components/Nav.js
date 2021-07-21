import React, { useState, useEffect } from "react";
import style from "../styles/Nav.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 230) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      <div className={style.landing_image_container}>
        <img src="/logo1.png" className={style.main_logo} />
      </div>
      <div className={style.header}>
        <nav className={style.nav}>
          <Link href="/">
            <li className={style.nav_list}>Home</li>
          </Link>

          <Link href="/blogs">
            <li className={style.nav_list}>Blogs</li>
          </Link>

          <Link href="/about">
            <li className={style.nav_list}>About</li>
          </Link>

          <Link href="/contact">
            <li className={style.nav_list}>Contact</li>
          </Link>
        </nav>
        <img
          src="/mini_header_logo.png"
          className={`${style.mini_logo} ${show && style.show}`}
        />
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
    </>
  );
};

export default Nav;
